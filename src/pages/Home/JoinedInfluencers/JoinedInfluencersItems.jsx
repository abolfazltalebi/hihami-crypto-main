import InfluencersCard from "../../../assets/Components/InfluencersCard";
import { InfluencerItems } from "../../../constants/InfluencerItmes";

export default function JoinedInfluencersItems() {
  return (
 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {InfluencerItems.map((influ) => (
        <InfluencersCard key={influ.title} {...influ} />
      ))}
    </div>  )
}
