import { narutoInfo } from "../../data/data";
import AnimeSectionLayout from "./AnimeSectionLayout";
import Section from "./Section";

function Naruto({ setActiveSection }) {
  return (
    <Section
      onVisible={setActiveSection}
      id="naruto"
      className="font-secondary bg-naruto relative"
    >
      <AnimeSectionLayout data={narutoInfo} />
    </Section>
  );
}

export default Naruto;
