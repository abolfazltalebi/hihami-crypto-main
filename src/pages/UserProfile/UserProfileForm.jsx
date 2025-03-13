import InputFiledForm from "../../assets/Components/InputFiledForm";
import NeonButton from "../../assets/Components/NeonButton";
import { FiledProfile } from "../../constants/FiledProfile";
import UserProfileFormHeader from "./UserProfileFormHeader";

export default function UserProfileForm() {
  return (
    <section className="sm:mt-24">
      <div className="container">
        <UserProfileFormHeader />
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-8">
            {FiledProfile.map((Fprofile) => (
              <InputFiledForm
                key={Fprofile.id}
                id={Fprofile.id}
                label={Fprofile.label}
                placeholder={Fprofile.placeholder}
              />
            ))}
          </div>
          <div className="w-full flex flex-col gap-3">
            <label
              htmlFor="bio"
              className="capitalize text-sm sm:text-xl md:text-xl"
            >
              Bio
            </label>
            <textarea
              id="bio"
              className="w-full h-[150px] sm:h-[300px] rounded-xl border border-[#A7A7A7] p-3 text-sm outline-none"
              placeholder="Enter Bio profile"
            />
          </div>
          <div className="m-auto w-[200px] mt-8">
            <NeonButton title={"Update Profile"} />
          </div>
        </form>
      </div>
    </section>
  );
}
