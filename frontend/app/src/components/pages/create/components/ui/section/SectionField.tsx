import { Title } from "@/components/atoms";
import { Input } from "@/components/ui/input";
import { Section } from "@/types";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormType } from "../../../[type]/context/ContextCreate";

interface Props {
  form: FormType;
  sectionField: Section["fields"][number];
}

export const SectionField = ({ form, sectionField }: Props) => {
  const errors = form.formState.errors;
  const error = errors[sectionField.name];
  return (
    <FormField
      control={form.control}
      name={sectionField.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            <Title className="font-normal text-md w-1/3">
              {"[[" + sectionField.title + "]]"}
            </Title>
          </FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription className="text-red-600 text-sm">
            {error?.message}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
