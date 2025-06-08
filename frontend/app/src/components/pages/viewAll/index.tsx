import { useParams } from "react-router-dom";

type TypeParam = "context" | "resume" | "template";

export const ViewAll = () => {
  const { type } = useParams<{ type: TypeParam }>();

  if (!type) return "Type not found";
  return <div>{type}</div>;
};
