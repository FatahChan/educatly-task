"use client";
/**
 * @description
 * This should take a query function, a hasmore function
 *
 */

import { BlogPage, fetchBlogPosts } from "@/services/dev-to";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo } from "react";
import { z } from "zod";
export const PREFETCH_OFFSET = 3;
export const usePaginationBlog = (initialPage?: BlogPage) => {
  const searchParams = useSearchParams();
  const page = useMemo(() => {
    const parsed = z.coerce.number().int().safeParse(searchParams.get("page"));
    if (parsed.success) {
      return parsed.data;
    }
    if (initialPage?.page) {
      return initialPage.page;
    }
    return 1;
  }, [initialPage?.page, searchParams]);

  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["blogs", page],
    initialData: page === initialPage?.page ? initialPage : undefined,
    queryFn: () => fetchBlogPosts(page),
  });

  /**
   * @returns undefined if the page data is not fetched yet
   * @returns the page data with zero length if the page has no data
   * @returns the page data with length > 0 if the page has data
   */
  const getPageData = useCallback(
    (page: number) => {
      return queryClient.getQueryData<BlogPage>(["blogs", page]);
    },
    [queryClient]
  );
  const doesPageHaveData = useCallback(
    (page: number) => {
      const pageData = getPageData(page);
      if (!pageData) {
        return false;
      }
      return pageData.blogs.length > 0;
    },
    [getPageData]
  );

  useEffect(() => {
    // prefetch the next 5 pages
    for (let i = page + 1; i < page + PREFETCH_OFFSET; i++) {
      queryClient.prefetchQuery({
        queryKey: ["blogs", i],
        queryFn: () => fetchBlogPosts(i),
      });
    }
    // prefetch the previous 5 pages
    for (let i = page - 1; i > page - PREFETCH_OFFSET && i > 0; i--) {
      queryClient.prefetchQuery({
        queryKey: ["blogs", i],
        queryFn: () => fetchBlogPosts(i),
      });
    }
  }, [page, queryClient]);

  return { ...query, page, getPageData, doesPageHaveData };
};
