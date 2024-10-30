import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export const ErrorMessage = ({
  className,
  children,
  action,
  actionLabel = "Retry",
}: {
  className?: string;
  children: React.ReactNode;
  action?: () => void;
  actionLabel?: string;
}) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <div>{children}</div>
      <Button onClick={() => action && action()} className="">
        {actionLabel}
      </Button>
    </div>
  );
};
