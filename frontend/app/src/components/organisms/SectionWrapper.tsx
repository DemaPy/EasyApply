import { PropsWithChildren } from "react";

interface Props {
  className: string;
}

export const SectionWrapper = ({
  className,
  children,
}: PropsWithChildren<Props>) => {
  return <div className={className}>{children}</div>;
};
