import LiveActionNftItems from "./LiveActionNftItems";
import LiveActionNftTitle from "./LiveActionNftTitle";

export default function LiveActionNft() {
  return (
    <section className=" container space-y-4">
      <LiveActionNftTitle />
      <LiveActionNftItems />
    </section>
  );
}
