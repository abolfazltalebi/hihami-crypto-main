import OurCollectionItems from "./OurCollectionItems";
import OurCollectionTitle from "./OurCollectionTitle";
export default function OurCollection() {
  return (
    <section className="container space-y-6">
      <OurCollectionTitle />
      <OurCollectionItems />
    </section>
  );
}
