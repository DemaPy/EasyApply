import { Title } from "@/components/atoms";
import { FlexContainer } from "@/components/molecules";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const Billing = () => {
  const queryClient = useQueryClient();
  const params = useParams<{ type: "0" | "1" }>();

  const message = Number(params.type)
    ? "Credits pack has been succesfully purchased"
    : "Something went wrong. Please try again later.";

  if (Number(params.type)) {
    queryClient.invalidateQueries({ queryKey: ["credits"] });
  }

  return <FlexContainer column>
    <Title>Billing</Title>
    <Title As="p" className="text-sm" >{message}</Title>
  </FlexContainer>;
};
