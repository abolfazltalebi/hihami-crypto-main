import { Link } from "react-router-dom";

export default function JoinedInfluencersTitle() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-700">Watch and follow celebrities to get the best collection of NFTs</p>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-normal capitalize">
          joined influencers
          </h2>
        </div>
        <div>
          <Link to="/AllNft">
            <button className="capitalize  bg-[#F81DFB]/5 px-8 py-2 rounded text-sm cursor-pointer">
              view all
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
