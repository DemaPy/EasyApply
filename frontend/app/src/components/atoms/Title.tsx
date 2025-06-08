import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface Props {
  title?: string;
  As?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
}

export const Title = ({
  children,
  className,
  title,
  As = "h1",
}: PropsWithChildren<Props>) => {
  return (
    <As title={title} className={cn("text-2xl font-bold", className)}>
      {children}
    </As>
  );
};
