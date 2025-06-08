import {
  FlexContainer,
  CreateButton,
  ScrollableContainer,
} from "@/components/molecules";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { z } from "zod";
import { useNavigate, useParams } from "react-router-dom";
import { createResume } from "@/api/resume";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { UseFormReturn, useForm } from "react-hook-form";
import { ResumeSchema, resumeSchema } from "./schema";
import { Input } from "@/components/ui/input";
import { SelectContext } from "./components/SelectContext";
import { SelectTemplate } from "./components/SelectTemplate";
import { JobDescription } from "./components/JobDescription";
import toast from "react-hot-toast";
import DOMPurify from "dompurify";

export type FormType = UseFormReturn<
  z.infer<ResumeSchema>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  undefined
>;

export const ResumeCreate = () => {
  const { type } = useParams<{ type: "resume" }>();
  const navigate = useNavigate();

  const form = useForm<z.infer<ResumeSchema>>({
    resolver: zodResolver(resumeSchema),
  });

  const mutate = useMutation({
    mutationFn: createResume,
    onSuccess: (data) => {
      navigate("/");
      console.log(data);
      form.reset();
    },
    onError: (error) => {
      toast(error.message);
      console.error(error);
    },
  });

  function onSubmit(values: z.infer<ResumeSchema>) {
    const title = values.resume;
    const clean = DOMPurify.sanitize("<b>hello there</b>");

    mutate.mutate({
      title,
      context: values.context,
      template: values.template,
      jobDescription: clean,
    });
  }

  if (!type) return "Type not found";

  return (
    <FlexContainer column className="gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FlexContainer className="gap-4" column>
            <FlexContainer>
              <FormField
                control={form.control}
                name={type}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full text-xl!"
                        placeholder={`Create ${type}`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CreateButton disabled={mutate.isPending} type="submit" />
            </FlexContainer>
            <ScrollableContainer>
              <SelectContext form={form} />
              <SelectTemplate form={form} />
              <JobDescription form={form} />
            </ScrollableContainer>
          </FlexContainer>
        </form>
      </Form>
    </FlexContainer>
  );
};
