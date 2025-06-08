import { FlexContainer } from "@/components/molecules";
import { SideBar } from "@/components/organism";
import { Outlet } from "react-router-dom";

export const WithSidebar = () => {
  return (
    <FlexContainer className="h-full items-start">
      <SideBar />
      <FlexContainer className="w-full h-full items-start p-6">
        <Outlet />
      </FlexContainer>
    </FlexContainer>
  );
};
