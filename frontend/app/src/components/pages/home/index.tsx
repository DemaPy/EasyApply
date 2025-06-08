import { UserHeader } from "@/components/organisms";
import {
  ContextTabContent,
  TemplatesTabContent,
  ResumesTabContent,
} from "../../tabs";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../ui/tabs";

export const Home = () => {
  return (
    <>
      <UserHeader />
      <Tabs defaultValue="resumes">
        <TabsList className="w-full">
          <TabsTrigger className="text-white text-md" value="resumes">
            Resumes
          </TabsTrigger>
          <TabsTrigger className="text-white text-md" value="context">
            Context
          </TabsTrigger>
          <TabsTrigger className="text-white text-md" value="templates">
            Template
          </TabsTrigger>
        </TabsList>
        <TabsContent value="resumes">
          <ResumesTabContent />
        </TabsContent>
        <TabsContent value="context">
          <ContextTabContent />
        </TabsContent>
        <TabsContent value="templates">
          <TemplatesTabContent />
        </TabsContent>
      </Tabs>
    </>
  );
};
