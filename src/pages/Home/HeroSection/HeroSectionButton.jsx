import { Link } from "react-router-dom";

export default function HeroSectionButton() {
  return (
    <div className="flex gap-4 items-center">
      <Link to="/explore">
        <button className="bg-[#AD1AAF] text-white rounded px-8 py-3 capitalize">
          explore more
        </button>
      </Link>
      <Link to="/explore">
        <button className="bg-[#AD1AAF]/5 text-white border border-[#AD1AAF] rounded px-8 py-3 capitalize">
          create
        </button>
      </Link>
    </div>
  );
}
