"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const PlansPagination = () => {
  
  return (
    <div className="w-full">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              scroll={false}
              className="hover:scale-150 transition-all ease-in-out duration-300"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="hover:scale-150 transition-all ease-in-out duration-300"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              className="hover:scale-150 transition-all ease-in-out duration-300"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
