import { Title } from "../atoms";

interface Props {
  name: string;
}

export const UserTitle = ({ name }: Props) => {
  return <Title className="text-white">Hello, {name}</Title>;
};
