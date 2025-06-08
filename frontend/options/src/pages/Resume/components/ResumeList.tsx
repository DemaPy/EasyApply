import { useQuery } from "@tanstack/react-query";
import { getAllResumes } from "@/api";
import { ResumeCard } from "./ResumeCard";

export const ResumeList = () => {
  const { isLoading, data, error } = useQuery({
    queryFn: getAllResumes,
    queryKey: ["resumes"],
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
      {data?.map((resume) => (
        <ResumeCard key={resume.id} resume={resume} />
      ))}
    </>
  );
};
