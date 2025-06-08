import { Title } from "@/components/atoms";
import { CreateButton, FlexContainer } from "@/components/molecules";
import TemplateList from "./components/TemplateList";

export const Template = () => {
  const handleClick = () => {
    alert("In development");
  };

  return (
    <FlexContainer column className="gap-4 w-full">
      <FlexContainer className="w-full">
        <Title>Templates</Title>
        <CreateButton onClick={handleClick} />
      </FlexContainer>
      FILTERS SECTION
      <TemplateList />
    </FlexContainer>
  );
};
