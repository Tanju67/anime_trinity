import img from "../../assets/photos/allOf.jpg";
import logoBleach from "../../assets/photos/logoBleach.png";
import logoNaruto from "../../assets/photos/logoNaruto.png";
import logoOne from "../../assets/photos/logoOne.webp";
import Section from "./Section";

function About({ setActiveSection }) {
  return (
    <Section
      onVisible={setActiveSection}
      id="about"
      className="bg-about font-secondary sm:text-lg lg:text-xl"
    >
      <div className="container px-4 py-8 sm:px-10 sm:py-10 md:py-20">
        <h1 className="font-tertiary mb-10 text-center text-4xl font-bold tracking-widest sm:text-5xl md:text-6xl lg:text-8xl">
          About Anime Trinity
        </h1>
        <div className="flex flex-col gap-8 xl:flex-row">
          <div className="order-2 flex-1 xl:order-1">
            <p className="mb-4">
              Welcome to <strong>Anime Trinity</strong> – the ultimate fan hub
              for the legendary{" "}
              <strong>Big Three: Naruto, One Piece, and Bleach.</strong>
            </p>
            <p className="mb-4">
              For many of us, these shows were more than just anime. They were
              our first epic adventures, our late-night marathons, and the
              stories that introduced us to unforgettable heroes, powerful
              friendships, and battles that still give us chills today.
            </p>
            <p className="mb-4">
              Here, you’ll find a place to relive those memories and dive even
              deeper. From character breakdowns and arc summaries to fun facts
              and fan discussions, this site is built by fans, for fans. Whether
              you want to debate the strongest captains, revisit Naruto’s
              journey to becoming Hokage, or sail with Luffy’s crew toward the
              One Piece, you’re in the right place.
            </p>
            <p className="mb-4">
              We celebrate the moments that made us laugh, cry, and cheer. The
              Big Three aren’t just anime — they’re a part of our lives, and
              this is the community where their legacy continues to live on.
            </p>
            <p>
              So tighten your headband, put on your straw hat, or draw your
              zanpakutō — and join us in keeping the spirit of the Anime Trinity
              alive! 🔥
            </p>
          </div>
          <div className="order-1 flex-1 xl:order-2">
            <div className="mb-4 flex items-center justify-between gap-4">
              <img src={logoOne} className="w-16 flex-1" alt="" />
              <img src={logoNaruto} className="w-16 flex-1" alt="" />
              <img src={logoBleach} className="w-16 flex-1" alt="" />
            </div>

            <img src={img} alt="" className="rounded-4xl" />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
