import { buyMediumPack } from "@/api";
import { useMutation } from "@tanstack/react-query";
import { CreditsCard } from "./CreditsCard";
import toast from "react-hot-toast";

export const MediumPack = () => {
  const mutate = useMutation({
    mutationFn: buyMediumPack,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <CreditsCard price="9" title="Medium pack - 250" onClick={mutate.mutate} />
  );
};
