import HeroSectionImage from "./HeroSectionImage";
import HeroSectionCaption from "./HeroSectionCaption";

export default function HeroSection() {
  return (
    <div className="bg-herosection">
      <section className="grid grid-cols-1 sm:grid-cols-2 container items-center gap-6 ">
        <HeroSectionCaption />
        <HeroSectionImage />
      </section>
    </div>
  );
}
