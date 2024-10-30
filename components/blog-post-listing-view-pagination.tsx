"use client";
import { ResponsiveGridLayout } from "./ui/responsive-grid-layout";
import BlogPostItem from "./blog-post-item";
import { BlogPage } from "@/services/dev-to";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";
import { useFetchPageBlogs } from "@/hooks/fetch-page-blogs";
import { cn } from "@/lib/utils";

const BlogPostListingView = ({ blogPage }: { blogPage: BlogPage }) => {
  const { data, isPending } = useFetchPageBlogs(blogPage);

  return (
    <div className="max-w-screen-lg m-auto flex flex-col mb-32">
      {!isPending ? (
        <ResponsiveGridLayout>
          {data
            ? data.blogs.map((blog) => (
                <BlogPostItem key={blog.id} blog={blog} />
              ))
            : null}
        </ResponsiveGridLayout>
      ) : (
        <span>Loading...</span>
      )}
      <div className="m-auto">
        <BlogPostListingViewPagination />
      </div>
    </div>
  );
};

const BlogPostListingViewPagination = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const { latestPage, isPending, finalPage } = useFetchPageBlogs();

  console.log("finalPage", finalPage);
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={{
              query: {
                page: page - 1,
              },
            }}
            onClick={(e) => {
              if (page === 1 || isPending) {
                e.preventDefault();
              }
            }}
            className={cn({
              "pointer-events-none opacity-20": page === 1 || isPending,
            })}
          />
        </PaginationItem>
        {Array.from({
          length: finalPage === undefined ? latestPage + 1 : finalPage,
        }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              isActive={page === index + 1}
              href={{
                query: {
                  page: index + 1,
                },
              }}
              onClick={(e) => {
                if (isPending) {
                  e.preventDefault();
                }
              }}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href={{
              query: {
                page: page + 1,
              },
            }}
            onClick={(e) => {
              if (isPending || finalPage === page) {
                e.preventDefault();
              }
            }}
            className={cn({
              "pointer-events-none opacity-20": page === finalPage || isPending,
            })}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default BlogPostListingView;
