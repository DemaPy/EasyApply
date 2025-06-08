import { FlexContainer } from "./FlexContainer";

export const Logo = () => {
  return (
    <FlexContainer className="justify-start">
      <span className="text-slate-700 font-bold text-xl">Easy</span>
      <span className="text-green-500 font-bold text-xl">Apply</span>
    </FlexContainer>
  );
};
