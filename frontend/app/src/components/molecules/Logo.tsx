import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Button
      onClick={handleClick}
      className="p-2 bg-neutral-300 w-min gap-0 rounded-md text-sm"
    >
      <span className="text-white">Easy</span>
      <span className="text-green-500 font-bold">Apply</span>
    </Button>
  );
};
