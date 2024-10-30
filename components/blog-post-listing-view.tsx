"use client";
import { ResponsiveGridLayout } from "./ui/responsive-grid-layout";
import BlogPostItem from "./blog-post-item";
import { BlogPage } from "@/services/dev-to";
import { Button } from "@/components/ui/button";
import { useFetchInfiniteBlogs } from "@/hooks/fetch-infinite-blogs";

const BlogPostListingView = ({ blogPage }: { blogPage: BlogPage }) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useFetchInfiniteBlogs(blogPage);

  return (
    <div className="max-w-screen-lg m-auto flex flex-col mb-32">
      <ResponsiveGridLayout>
        {data.pages.map((page) =>
          page.blogs.map((blog) => <BlogPostItem key={blog.id} blog={blog} />)
        )}
      </ResponsiveGridLayout>

      <div className="m-auto">
        {hasNextPage ? (
          <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? "loading..." : "load more"}
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default BlogPostListingView;
