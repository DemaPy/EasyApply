import { Title } from "@/components/atoms";
import { SmallPack } from "./components/SmallPack";
import { MediumPack } from "./components/MediumPack";

export const Credits = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Title>Buy credits</Title>
        <Title As="p" className="text-sm text-neutral-100 font-normal">
          Credits allows you to generate resumes based on provided job
          description.
        </Title>
      </div>
      <div className="flex flex-col gap-2">
        <SmallPack />
        <MediumPack />
      </div>
    </div>
  );
};
