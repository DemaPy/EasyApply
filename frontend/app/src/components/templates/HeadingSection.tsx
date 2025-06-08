import { Container } from "../molecules/Container";
import { Header, SectionWrapper } from "../organisms";

export const HeadingSection = () => {
  return (
    <SectionWrapper className="bg-green-50">
      <Container>
        <Header />
      </Container>
    </SectionWrapper>
  );
};