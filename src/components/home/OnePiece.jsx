import { onePieceInfo } from "../../data/data";
import AnimeSectionLayout from "./AnimeSectionLayout";
import Section from "./Section";

function OnePiece({ setActiveSection }) {
  return (
    <Section
      onVisible={setActiveSection}
      id="onepiece"
      className="font-secondary bg-onepiece relative"
    >
      <AnimeSectionLayout data={onePieceInfo} />
    </Section>
  );
}

export default OnePiece;
