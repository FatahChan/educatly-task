"use client";
import { useFetchPageBlogs } from "@/hooks/fetch-page-blogs";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "./ui/pagination";

export const PaginationControls = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const { latestPage, isPending, finalPage } = useFetchPageBlogs();

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
            shallow
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
              shallow
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
            shallow
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
