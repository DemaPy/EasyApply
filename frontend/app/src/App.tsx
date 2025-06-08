import { BodySection, HeadingSection } from "./components/templates";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <main>
      <Toaster />
      <HeadingSection />
      <BodySection />
    </main>
  );
};
