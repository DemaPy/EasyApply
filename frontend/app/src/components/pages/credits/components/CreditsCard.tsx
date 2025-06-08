import { Title } from "@/components/atoms";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  onClick: () => void;
  price: string;
}

export const CreditsCard = ({ title, price, onClick }: Props) => {
  return (
    <div className="flex items-center justify-between gap-4 px-3 py-3 bg-white rounded-md">
      <Title className="text-md">{title} credits</Title>
      <div>
        <Button
          onClick={onClick}
          className="bg-green-600 text-white font-bold cursor-pointer w-full"
        >
          Buy for <p>${price}</p>
        </Button>
      </div>
    </div>
  );
};
