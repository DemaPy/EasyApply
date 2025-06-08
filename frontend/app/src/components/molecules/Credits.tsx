import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useQuery } from "@tanstack/react-query";
import { getCredits } from "@/api";

export const Credits = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["credits"],
    queryFn: () => getCredits("172ca22f-c006-4a25-8441-7325a485765e"),
  });
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/credits");
  };
  return (
    <Button
      variant={"ghost"}
      className="cursor-pointer"
      onClick={handleNavigate}
    >
      {isLoading ? 9999 : data?.data} credits
    </Button>
  );
};
