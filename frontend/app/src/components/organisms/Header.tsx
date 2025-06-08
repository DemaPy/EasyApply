import { FlexContainer } from "../molecules/FlexContainer";
import { Logo, Credits } from "../molecules";

export const Header = () => {
  return (
    <FlexContainer>
      <Logo />
      <Credits />
    </FlexContainer>
  );
};
