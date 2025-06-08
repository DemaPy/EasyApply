import { buySmallPack } from "@/api";
import { useMutation } from "@tanstack/react-query";
import { CreditsCard } from "./CreditsCard";
import toast from "react-hot-toast";
import { redirect } from "@/lib/utils";

export const SmallPack = () => {
  const mutate = useMutation({
    mutationFn: buySmallPack,
    onSuccess: ({ data: url }) => {
      redirect(url);
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  return (
    <CreditsCard price="6" title="Small pack - 100" onClick={mutate.mutate} />
  );
};
