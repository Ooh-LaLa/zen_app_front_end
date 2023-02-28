import NavLinksList from "./NavLinkList"
import { Link } from "react-router-dom"

const NavBar = ({ user, handleLogout }) => {
  return (
    <div id="nav-container">
      <Link to='/'>
      </Link>
      <NavLinksList user={user} handleLogout={handleLogout} />
    </div>
  )
}

export default NavBar
