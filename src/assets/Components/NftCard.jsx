import { HiHeart } from "react-icons/hi";
import { motion } from "framer-motion";
import NeonButton from "./NeonButton";

export default function NftCard(NftInfo) {
  const { img, title, likes, creator, price, button } = NftInfo;

  return (
    <motion.div
      className="rounded-[15px] bg-gradient-to-br from-white/10 to-white/5 flex flex-col gap-4 p-3 relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        <img src={img} alt={title} />
      </div>
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[20px] px-3 py-2 rounded flex items-center gap-2 absolute top-4 right-4">
        <HiHeart />
        <span className="text-xs">{likes}</span>
      </div>
      {/* caption */}
      <div className="flex items-center gap-2">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs text-gray-500">by {creator}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p>{price}</p>
      </div>
      <NeonButton title={button} />
    </motion.div>
  );
}
