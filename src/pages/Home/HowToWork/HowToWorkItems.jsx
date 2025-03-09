import HowToWorkCard from "../../../assets/Components/HowToWorkCard";
import { HowToItem } from "../../../constants/HowToWork";

export default function HowToWorkItems() {

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {HowToItem.map((Hitem) => {
        return <HowToWorkCard key={Hitem.id} {...Hitem} />;
      })}
    </div>
  );
}
