import { BlogPage, fetchBlogPosts } from "@/services/dev-to";
import { useInfiniteQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useFetchInfiniteBlogs = (initialBlogPage?: BlogPage) => {
  return useInfiniteQuery({
    queryKey: ["blogs"],

    queryFn: async ({ pageParam }) => {
      try {
        return await fetchBlogPosts(pageParam);
      } catch (error) {
        toast.error("Error fetching blog posts, please try again later");
        throw error;
      }
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) =>
      lastPage.blogs.length ? lastPageParam + 1 : null,
    retry: 0,
    throwOnError: false,
    initialData: initialBlogPage
      ? {
          pages: [initialBlogPage],
          pageParams: [initialBlogPage.page],
        }
      : undefined,
  });
};
