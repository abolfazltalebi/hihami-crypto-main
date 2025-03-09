 import { Link } from "react-router-dom";
import logoHeader from "@/assets/images/icons/logo-header.svg";
import { FaBars } from "react-icons/fa";
// import HeaderDrower from './HeaderDrower'
export default function Header() {
  return (
    <header className="py-4">
      <div className="container flex items-center justify-between">
        <div>
          <Link to="/" className="flex items-center">
            <img src={logoHeader} className="size-10" alt="" />
            <span className="uppercase font-bold text-xl">hihami</span>
          </Link>
        </div>
        <div className="main-menu"></div>
        <div className="md:hidden">
          {/* <HeaderDrower /> */}
          <FaBars />
        </div>
      </div>
    </header>
  );
}
