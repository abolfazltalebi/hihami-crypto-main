import backgroudUser from "@/assets/images/backgroun-user-profile.webp";
import { BiCamera } from "react-icons/bi";
import avatar from "@/assets/images/icons/avatar1.svg";
export default function UserProfileHeader() {
  return (
<section className="">
        <div className="relative">
          <img src={backgroudUser} alt="" />
        </div>
        <div className="flex flex-col gap-4 items-center absolute sm:bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="hidden md:flex items-center justify-between container  p-4 rounded-full bg-white/30 backdrop-blur-sm">
            <div>
              <h2>431 followers | 13 following</h2>
            </div>
            <div>
              <BiCamera />
            </div>
          </div>
          <div>
            <img src={avatar} className="size-24" alt="" />
          </div>
        </div>
      </section>  )
}
