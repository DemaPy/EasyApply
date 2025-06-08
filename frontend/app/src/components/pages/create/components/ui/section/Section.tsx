import { Title } from "@/components/atoms";
import { FlexContainer } from "@/components/molecules";
import { Section as SectionType } from "@/types";
import { SectionField } from "./SectionField";
import { FormType } from "../../../[type]/context/ContextCreate";

interface Props {
  form: FormType;
  section: SectionType;
}

export const Section = ({ form, section }: Props) => {
  return (
    <FlexContainer column className="gap-2">
      <Title className="text-sm">{section.title}</Title>
      <FlexContainer column className="gap-2">
        {section.fields.map((sectionField) => (
          <SectionField
            key={sectionField.id}
            form={form}
            sectionField={sectionField}
          />
        ))}
      </FlexContainer>
    </FlexContainer>
  );
};
