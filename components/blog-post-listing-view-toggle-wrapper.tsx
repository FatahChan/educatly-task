"use client";

import { ToggleBetweenLoadAndPageContext } from "@/context/toggle-between-load-and-page-provider";
import { useContext } from "react";
import { default as BlogPostListingViewPagination } from "./blog-post-listing-view-pagination";
import { BlogPage } from "@/services/dev-to";
import { default as BlogPostListingViewLoadMore } from "./blog-post-listing-view-load-more";

export const BlogPostListingViewToggleWrapper = ({
  blogPage,
}: {
  blogPage: BlogPage;
}) => {
  const context = useContext(ToggleBetweenLoadAndPageContext);
  if (!context) {
    throw new Error(
      "ToggleBetweenLoadAndPageContext must be used within a ToggleBetweenLoadAndPageProvider"
    );
  }
  if (context.isPageSelected) {
    return <BlogPostListingViewPagination blogPage={blogPage} />;
  }
  return <BlogPostListingViewLoadMore blogPage={blogPage} />;
};
