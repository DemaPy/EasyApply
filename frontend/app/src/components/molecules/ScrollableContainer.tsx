import { HTMLProps, PropsWithChildren } from "react";
import { FlexContainer } from "./FlexContainer";
import clsx from "clsx";

export const ScrollableContainer = ({
  children,
  className,
}: PropsWithChildren<Pick<HTMLProps<HTMLDivElement>, "className">>) => {
  return (
    <FlexContainer
      className={clsx(
        "h-[360px] overflow-y-auto rounded-md flex-col items-stretch gap-4 justify-start",
        className
      )}
    >
      {children}
    </FlexContainer>
  );
};
