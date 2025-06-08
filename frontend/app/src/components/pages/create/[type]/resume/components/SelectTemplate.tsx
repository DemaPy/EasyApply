import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FormType } from "../ResumeCreate";
import { useQuery } from "@tanstack/react-query";
import { getAllTemplate } from "@/api";
import type { Template as TemplateType } from "@/types";

interface SelectTemplate {
  form: FormType;
}

export const SelectTemplate = ({ form }: SelectTemplate) => {
  const { isLoading, data, error } = useQuery({
    queryFn: getAllTemplate,
    queryKey: ["templates"],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
    return "Oooops... error";
  }

  return (
    <FormField
      control={form.control}
      name={"template"}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Select template</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select template" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {data?.map((context: TemplateType) => (
                  <SelectItem key={context.id} value={context.id}>
                    {context.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
