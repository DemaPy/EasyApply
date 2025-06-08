import { Title } from "@/components/atoms";
import { CreateButton, FlexContainer } from "@/components/molecules";
import { ResumeList } from "./components/ResumeList";

export const Resume = () => {
  const handleClick = () => {
    alert("In development");
  };

  return (
    <FlexContainer column className="gap-4 w-full">
      <FlexContainer className="w-full">
        <Title>Resumes</Title>
        <CreateButton onClick={handleClick} />
      </FlexContainer>
      FILTERS SECTION
      <ResumeList />
    </FlexContainer>
  );
};
