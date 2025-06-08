import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Item {
  id: string;
  value: string;
  title: string;
}

interface Props {
  title: string;
  onSelect: (value: string) => void;
  items: Item[];
}

const SelectComponent = ({ onSelect, title, items }: Props) => {
  return (
    <Select onValueChange={onSelect} value={title}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        {items.map((item, idx) => (
          <SelectItem key={idx} value={item.value}>
            {item.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
