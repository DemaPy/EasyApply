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
import { getAllContext } from "@/api";
import type { Context as ContextType } from "@/types";

interface SelectContext {
  form: FormType;
}

export const SelectContext = ({ form }: SelectContext) => {
  const { isLoading, data, error } = useQuery({
    queryFn: getAllContext,
    queryKey: ["all_context"],
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
      name={"context"}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Select context</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select context" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {data?.map((context: ContextType) => (
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
