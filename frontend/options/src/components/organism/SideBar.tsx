import { FlexContainer, Logo, Navigation } from "../molecules";
import { LoggedUser } from "./LoggedUser";

export function SideBar() {
  return (
    <FlexContainer
      column
      className="h-full p-6 max-w-xs w-full border-r-1 border-neutral-300 bg-neutral-100"
    >
      <FlexContainer className="gap-6" column>
        <Logo />
        <Navigation />
      </FlexContainer>
      <LoggedUser />
    </FlexContainer>
  );
}
