import { motion } from "framer-motion";

export default function InfluencersCard({ id, name, social, cover, Auser }) {
  return (
    <motion.div 
      className="rounded-[15px] bg-gradient-to-br from-white/10 to-white/5 flex flex-col gap-4 relative p-3"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        <img src={cover} alt={name} className="rounded-[15px]" />
        <img
          src={Auser}
          alt={name}
          className="size-14 sm:size-16 absolute -bottom-8 left-10 transform -translate-x-1/2 rounded-full"
        /> 
      </div>
      <div className="flex items-center justify-between mt-8">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">{name}</h3>
          <p className="text-xs text-gray-500">{social}</p>
        </div>
        <div>
          <button className="button-nft">Follow</button>
        </div>
      </div>
    </motion.div>
  );
}
