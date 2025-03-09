import HeroSectionImage from "./HeroSectionImage";
import HeroSectionCaption from "./HeroSectionCaption";
import HeroSectionWay from "./HeroSectionWay";

export default function HeroSection() {
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 container items-center gap-6">
        <HeroSectionCaption />
        <HeroSectionImage />
      </section>
      <HeroSectionWay />
    </>
  );
}
