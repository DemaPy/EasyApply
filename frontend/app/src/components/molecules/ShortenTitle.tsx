import { Title } from "../atoms";

export interface Options {
  limit: number;
}

interface Props {
  title: string;
  options: Options;
  className?: string;
}

export const ShortenTitle = ({ title, options, className }: Props) => {
  const shortenString = (value: string, options: Options) => {
    if (value.length > options.limit) {
      return value.slice(0, options.limit) + "...";
    }
    return value;
  };

  const shortenTitle = shortenString(title, options);
  return (
    <Title className={className} title={title}>
      {shortenTitle}
    </Title>
  );
};
