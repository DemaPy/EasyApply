import { Button } from "../ui/button";

interface Props {
  disabled?: boolean
  type?: 'submit' | 'button'
  onClick?: () => void;
}

export const CreateButton = ({ onClick, type, disabled }: Props) => {
  return (
    <Button
      disabled={disabled}
      type={type ?? 'button'}
      variant={"default"}
      className="bg-green-600 font-bold text-white"
      onClick={onClick}
    >
      Create
    </Button>
  );
};
