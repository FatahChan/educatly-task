import { cn } from "@/lib/utils";
import React from "react";

export const ResponsiveGridLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 p-4",
        className
      )}
    >
      {children}
    </div>
  );
};
