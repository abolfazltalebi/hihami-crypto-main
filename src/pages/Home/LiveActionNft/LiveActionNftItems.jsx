import NftCard from "../../../assets/Components/NftCard";
import { NftInfo } from "../../../constants/NftInfo";
export default function LiveActionNftItems() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {NftInfo.map((nft) => (
        <NftCard key={nft.title} {...nft} />
      ))}
    </div>
  )
}
