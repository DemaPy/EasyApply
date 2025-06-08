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
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { UseFormReturn, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createContext } from "@/api";
import { ContextSchema, formSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Section } from "../../components";
import { contextSections } from "./sections";

export type FormType = UseFormReturn<
  z.infer<ContextSchema>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  undefined
>;

export const ContextCreate = () => {
  const navigate = useNavigate();

  const mutate = useMutation({
    mutationFn: createContext,
    onSuccess: (data) => {
      navigate("/");
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const form = useForm<z.infer<ContextSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<ContextSchema>) {
    const title = values.context!;
    delete values.context;
    mutate.mutate({ title, sections: values });
  }

  return (
    <FlexContainer column className="gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FlexContainer className="gap-4" column>
            <FlexContainer>
              <FormField
                control={form.control}
                name={"context"}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full text-xl!"
                        placeholder={`Create context`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CreateButton disabled={mutate.isPending} type="submit" />
            </FlexContainer>
            <ScrollableContainer>
              {contextSections.map((section) => (
                <Section key={section.id} section={section} form={form} />
              ))}
            </ScrollableContainer>
          </FlexContainer>
        </form>
      </Form>
    </FlexContainer>
  );
};
