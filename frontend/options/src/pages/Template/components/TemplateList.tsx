import { useQuery } from "@tanstack/react-query";
import { TempalateCard } from "./TemplateCard";
import { getAllTemplate } from "@/api";

const TemplateList = () => {
  const { isLoading, data, error } = useQuery({
    queryFn: getAllTemplate,
    queryKey: ["templates"],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div>Oooops... error</div>;
  }
  return (
    <>
      {data?.map((template) => (
        <TempalateCard key={template.id} template={template} />
      ))}
    </>
  );
};

export default TemplateList;
