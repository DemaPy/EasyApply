import { Outlet } from "react-router-dom";
import { Container } from "../molecules/Container";
import { SectionWrapper } from "../organisms";
import { PropsWithChildren } from "react";

export const BodySection = ({ children }: PropsWithChildren) => {
  return (
    <SectionWrapper className="bg-green-800/50 rounded-md">
      <Container className="gap-4">
        {children ? children : <Outlet />}
      </Container>
    </SectionWrapper>
  );
};
