import { Link } from "react-router-dom";
import headerLogo from '@/assets/images/icons/logo-header.svg'
export default function HeaderLogo() {
  return (
    <div>
      <Link to='/'>
        <img src={headerLogo} alt="" />
      </Link>
    </div>
  )
}
