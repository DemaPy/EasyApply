import { useQuery } from "@tanstack/react-query";
import { getAllContext } from "@/api";
import { ContextCard } from "./ContextCard";

export const ContextList = () => {
  const { isLoading, data, error } = useQuery({
    queryFn: getAllContext,
    queryKey: ["contexts"],
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
      {data?.map((context) => (
        <ContextCard key={context.id} context={context} />
      ))}
    </>
  );
};
