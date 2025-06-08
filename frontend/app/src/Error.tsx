import { Link } from "react-router-dom";
import { Title } from "./components/atoms";
import { FlexContainer } from "./components/molecules";
import { BodySection, HeadingSection } from "./components/templates";
import { Button } from "./components/ui/button";

export const Error = () => {
  return (
    <main>
      <HeadingSection />
      <BodySection>
        <FlexContainer column className="gap-2">
          <Title className="text-center">Ooops, unexpected error happend</Title>
          <Button className="cursor-pointer" asChild variant={"outline"}>
            <Link to={"/"}>Go to main page</Link>
          </Button>
        </FlexContainer>
      </BodySection>
    </main>
  );
};
