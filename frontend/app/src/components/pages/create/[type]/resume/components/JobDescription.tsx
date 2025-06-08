import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { FormType } from "../ResumeCreate";
import { Textarea } from "@/components/ui/textarea";

interface JobDescription {
  form: FormType;
}

export const JobDescription = ({ form }: JobDescription) => {
  return (
    <FormField
      control={form.control}
      name={"jobDescription"}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Job description</FormLabel>
          <FormControl>
            <Textarea {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
