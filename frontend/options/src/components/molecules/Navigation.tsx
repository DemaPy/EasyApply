import { Link } from "react-router-dom";
import { FlexContainer } from "./FlexContainer";

export const Navigation = () => {
  return (
    <FlexContainer column className="gap-4">
      <Link
        to={"/resume"}
        className="text-xs font-bold rounded-md bg-neutral-200 px-2 py-3"
      >
        Resume
      </Link>
      <Link
        to={"/context"}
        className="text-xs font-bold rounded-md bg-neutral-200 px-2 py-3"
      >
        Context
      </Link>
      <Link
        to={"/template"}
        className="text-xs font-bold rounded-md bg-neutral-200 px-2 py-3"
      >
        Resume templates
      </Link>
    </FlexContainer>
  );
};
