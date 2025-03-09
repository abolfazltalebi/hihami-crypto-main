 import nftHeroSection from "@/assets/images/nft-herosection.webp";

export default function HeroSectionImage() {
  return (
    <div className="order-first">
      <img src={nftHeroSection} className="w-full h-auto bg-cover" alt="" />
    </div>
  );
}
