import { Title } from "@/components/atoms";
import { CreateButton, FlexContainer } from "@/components/molecules";
import { ContextList } from "./components/ContextList";

export const Context = () => {
  const handleClick = () => {
    alert("In development");
  };

  return (
    <FlexContainer column className="gap-4 w-full">
      <FlexContainer className="w-full">
        <Title>Contexts</Title>
        <CreateButton onClick={handleClick} />
      </FlexContainer>
      FILTERS SECTION
      <ContextList />
    </FlexContainer>
  );
};
