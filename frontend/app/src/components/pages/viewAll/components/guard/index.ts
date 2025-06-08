import { PropsWithChildren } from "react";
import { redirect, useParams } from "react-router-dom";

const ALLOWED_TYPES = ["resume", "context", "template"];

export const ViewGuard = ({ children }: PropsWithChildren) => {
  const params = useParams<{ type: string }>();

  if (params.type && !ALLOWED_TYPES.includes(params.type)) {
    redirect("/");
    return;
  }

  return children;
};
