import { Button } from "../ui/button";

interface Props {
  onClick: () => void;
}

export const SeeMoreButton = ({ onClick }: Props) => {
  return (
    <Button
      variant={"ghost"}
      onClick={onClick}
      className="bg-green-600 text-white"
    >
      See More
    </Button>
  );
};
