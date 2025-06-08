import { Title } from "@/components/atoms";
import { Context } from "@/types";

interface Props {
  context: Context;
}

export const ContextCard = ({ context }: Props) => {
  return (
    <div>
      <Title>{context.title}</Title>
    </div>
  );
};
