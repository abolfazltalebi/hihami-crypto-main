export default function WalletItemsCard({ name, img }) {
  return (
    <div className="bg-gradient-to-br from-white/10 to-white/10 rounded-full p-4 flex items-center gap-2">
      <img src={img} className="size-13" alt="" />
      <h3 className="text-sm">{name}</h3>
    </div>
  );
}
