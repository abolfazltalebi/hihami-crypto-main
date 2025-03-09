import HeroSectionButton from "./HeroSectionButton";

export default function HeroSectionCaption() {
  return ( 
    <div className="space-y-4">
      <h1 className="text-xl md:text-5xl leading-normal font-bold">
        EXPLORE, CREATE AND SELL YOUR NFT’S ON SHIHAMI
      </h1> 
      <p className="text-foreground">
        Shihami is the World’s first and largest NFT/Avatar marketplace
      </p>
      <HeroSectionButton />
    </div>
  );
}
