import { Title } from "../atoms";
import { Button } from "../ui/button";
import { FlexContainer } from ".";
import { PropsWithChildren } from "react";

interface Props {
  onClick: () => void;
}

export const TabContentTitle = ({
  children,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <FlexContainer>
      <Title>{children}</Title>
      <Button className="cursor-pointer" variant={"ghost"} size={"sm"} onClick={onClick}>
        view all
      </Button>
    </FlexContainer>
  );
};
