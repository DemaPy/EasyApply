import type { Context as ContextType } from "@/types";
import { FlexContainer, SeeMoreButton, ShortenTitle } from "../molecules";

interface Props {
  context: ContextType;
}

export const Context = ({ context }: Props) => {
  return (
    <FlexContainer className="rounded-md bg-neutral-50 px-3 py-2">
      <ShortenTitle
        className="text-md capitalize"
        title={context.title}
        options={{ limit: 18 }}
      />
      <SeeMoreButton onClick={() => alert(JSON.stringify(context, null, 4))} />
    </FlexContainer>
  );
};
