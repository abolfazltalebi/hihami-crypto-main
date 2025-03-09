import { BiSend } from "react-icons/bi";

export default function ReadyNft() {
  return (
    <section className="container flex flex-col items-center gap-6">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">
        Ready for Next NFT Drop?
        </h2>
        <div className="flex items-center gap-2 w-1/3">
            <input type="text" className="border border-[#AD1AAF] px-2 py-3 rounded-xl outline-none transition-all duration-300 w-[90%] " placeholder="info@gmail.com" />
            <button className="bg-[#AD1AAF] size-10 rounded-full flex items-center justify-center">
                <BiSend/>
            </button>
        </div>
    </section>
  )
}
