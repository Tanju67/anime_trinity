import { bleachInfo } from "../../data/data";
import AnimeSectionLayout from "./AnimeSectionLayout";
import Section from "./Section";

function Bleach({ setActiveSection }) {
  return (
    <Section
      id="bleach"
      onVisible={setActiveSection}
      className="font-secondary bg-bleach relative"
    >
      <AnimeSectionLayout data={bleachInfo} />
    </Section>
  );
}

export default Bleach;
