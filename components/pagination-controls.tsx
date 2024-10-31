"use client";
import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "./ui/pagination";
import { PREFETCH_OFFSET, usePaginationBlog } from "@/hooks/use-pagination";
import { useMemo } from "react";

export const PaginationControls = () => {
  const { page } = usePaginationBlog();

  const pageNumbers = useMemo(
    () =>
      Array.from({
        length: PREFETCH_OFFSET * 2 + 1,
      })
        .map((_, index) => {
          return page + index - PREFETCH_OFFSET;
        })
        .filter((num) => num > 0),
    [page]
  );

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
              if (page === 1) {
                e.preventDefault();
              }
            }}
            shallow
            scroll={false}
            className={cn({
              "pointer-events-none opacity-20": page === 1,
            })}
          />
        </PaginationItem>
        {pageNumbers.map((pageIndex) => (
          <PaginationItem key={pageIndex}>
            <PaginationLink
              isActive={page === pageIndex}
              href={{
                query: {
                  page: pageIndex,
                },
              }}
              scroll={false}
              shallow
            >
              {pageIndex}
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
            prefetch={true}
            scroll={false}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
