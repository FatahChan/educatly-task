import { BlogPage, fetchBlogPosts } from "@/services/dev-to";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

export const useFetchPageBlogs = (initialBlogPage?: BlogPage) => {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const [finalPage, setFinalPage] = useState<number | undefined>(undefined);

  const page = useMemo(
    () => Number(searchParams.get("page")) || 1,
    [searchParams]
  );

  const query = useQuery({
    queryKey: ["blogs", page],
    initialData: initialBlogPage,
    queryFn: async () => {
      try {
        const fetchedPage = await fetchBlogPosts(page);
        if (fetchedPage.blogs.length === 0) {
          setFinalPage(page);
        }
        return fetchedPage;
      } catch (error) {
        toast.error("Error fetching blog posts, please try again later");
        throw error;
      }
    },
    throwOnError: false,
  });

  // Prefetch the next page

  const isPagePrefetched = useCallback(
    (page: number) => {
      return queryClient.getQueryData<BlogPage>(["blogs", page]);
    },
    [queryClient]
  );

  const prefetchPage = useCallback(
    (page: number) => {
      queryClient.prefetchQuery({
        queryKey: ["blogs", page],
        queryFn: async () => {
          try {
            const fetchedPage = await fetchBlogPosts(page);
            if (fetchedPage.blogs.length === 0) {
              setFinalPage((prevFinalPage) => {
                if (prevFinalPage === undefined) {
                  return page - 1;
                }
                return Math.min(prevFinalPage, page - 1);
              });
            }
            return fetchedPage;
          } catch (error) {
            console.log("Error prefetching page:", error);
          }
        },
      });
    },
    [queryClient]
  );
  useEffect(() => {
    const numberOfPagesToPrefetch = 2;

    if (isPagePrefetched(page + 1)) {
      return;
    }
    if (finalPage && page >= finalPage) {
      return;
    }

    for (let i = page + 1; i <= page + numberOfPagesToPrefetch; i++) {
      prefetchPage(i);
    }
  }, [finalPage, isPagePrefetched, page, prefetchPage, queryClient]);

  // Mark the latest page that has been reached
  const [latestPage, setLatestPage] = useState(page);
  useEffect(() => {
    setLatestPage((prevLatest) => (prevLatest < page ? page : prevLatest));
  }, [page]);

  return useMemo(() => {
    return {
      ...query,
      hasPreviousPage: page > 1,
      hasNextPage:
        queryClient.getQueryData<BlogPage>(["blogs", page + 1])?.blogs
          ?.length || false,
      latestPage,
      finalPage,
    };
  }, [finalPage, latestPage, page, query, queryClient]);
};
