"use client";
import { ResponsiveGridLayout } from "./ui/responsive-grid-layout";
import BlogPostItem from "./blog-post-item";
import { BlogPage } from "@/services/dev-to";

import { ErrorMessage } from "./error-message";
import { LoadingSpinner } from "./loading-spinner";
import { useRouter } from "next/navigation";
import { usePaginationBlog } from "@/hooks/use-pagination";

const BlogPostListingView = ({ blogPage }: { blogPage: BlogPage }) => {
  const { data, isPending, isError, refetch } = usePaginationBlog(blogPage);
  const router = useRouter();
  return (
    <div className="max-w-screen-lg m-auto flex flex-col mb-8 mt-8">
      {isError ? (
        <ErrorMessage action={() => refetch()} actionLabel="Retry">
          Something went wrong
        </ErrorMessage>
      ) : null}
      {isPending ? (
        <div className="m-auto">
          {" "}
          <LoadingSpinner />{" "}
        </div>
      ) : null}
      {data?.blogs.length === 0 ? (
        <ErrorMessage action={() => router.push("/")} actionLabel="Return Home">
          No blog posts found
        </ErrorMessage>
      ) : null}
      {!isError && !isPending && data.blogs.length > 0 ? (
        <ResponsiveGridLayout>
          {data.blogs.map((blog) => (
            <BlogPostItem key={blog.id} blog={blog} />
          ))}
        </ResponsiveGridLayout>
      ) : null}
    </div>
  );
};

export default BlogPostListingView;
