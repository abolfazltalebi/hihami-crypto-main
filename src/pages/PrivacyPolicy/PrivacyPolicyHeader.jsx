import bgPrivacy from "@/assets/images/bg-PrivacyPolicy.webp";

export default function PrivacyPolicyHeader() {
  return (
    <section className="">
    <div className="relative">
      <img src={bgPrivacy} alt="" />
    </div>
    <div className="absolute top-[40%] sm:top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-white">
        Privacy Policy
      </h2>
    </div>
  </section>  )
}
