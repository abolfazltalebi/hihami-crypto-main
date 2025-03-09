export default function HowToWorkCard({ icon: Icon, name }) {
  return (
    <div className=" flex flex-col items-center gap-2">
      <div className="bg-gradient-to-br from-white/10 to-white/10 rounded-full p-4">
        <Icon className="size-7 text-[#F81DFB] " />
      </div>
      <h3 className="text-sm">{name}</h3>
    </div>
  );
}
