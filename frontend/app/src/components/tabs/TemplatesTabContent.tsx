import { Template as TemplateType } from "@/types";
import {
  FlexContainer,
  ScrollableContainer,
  TabContentTitle,
} from "../molecules";
import { Template } from "../organisms/Template";
import { useNavigate } from "react-router-dom";

export const TemplatesTabContent = () => {
  const navigate = useNavigate();
  const templates: TemplateType[] = [
    {
      id: "1",
      title: "Monix",
    },
    {
      id: "2",
      title: "Sonic",
    },
    {
      id: "3",
      title: "Vintage",
    },
    {
      id: "4",
      title: "Modern",
    },
    {
      id: "5",
      title: "Custom",
    },
  ];

  const handleViewAll = () => {
    navigate('/viewAll/template')
  }

  return (
    <FlexContainer className="flex-col gap-2 items-stretch">
      <TabContentTitle onClick={handleViewAll}>
        Resume templates
      </TabContentTitle>
      <ScrollableContainer className="gap-2">
        {templates.map((resume) => (
          <Template key={resume.id} template={resume} />
        ))}
      </ScrollableContainer>
    </FlexContainer>
  );
};
