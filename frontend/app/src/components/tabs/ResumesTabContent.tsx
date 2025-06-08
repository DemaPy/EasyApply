import { Resume as ResumeType } from "@/types";
import {
  CreateButton,
  FlexContainer,
  ScrollableContainer,
  TabContentTitle,
} from "../molecules";
import { Resume } from "../organisms/Resume";
import { useNavigate } from "react-router-dom";
import { getAllResumes } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const ResumesTabContent = () => {
  const navigate = useNavigate();
  const { isLoading, data, error } = useQuery({
    queryFn: getAllResumes,
    queryKey: ["resumes"],
  });

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    console.log(error);
    return "Oooops... error";
  }

  const onCreate = () => {
    navigate("/create/resume");
  };

  const handleViewAll = () => {
    navigate('/viewAll/resume')
  }

  return (
    <FlexContainer className="flex-col gap-2 items-stretch">
      <TabContentTitle onClick={handleViewAll}>
        Generated resumes
      </TabContentTitle>
      <ScrollableContainer className="gap-2">
        {data?.map((resume: ResumeType) => (
          <Resume key={resume.id} resume={resume} />
        ))}
      </ScrollableContainer>
      <CreateButton onClick={onCreate} />
    </FlexContainer>
  );
};
