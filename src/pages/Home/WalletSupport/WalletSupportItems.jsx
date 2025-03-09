import WalletItemsCard from "../../../assets/Components/WalletItemsCard";
import { WalletSupportItem } from "../../../constants/WalletSupportItems";

export default function WalletSupportItems() {


  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 items-center justify-center">
      {WalletSupportItem.map((Witem) => (
        <WalletItemsCard key={Witem.id} {...Witem} />
      ))}
    </div>
  );
}
