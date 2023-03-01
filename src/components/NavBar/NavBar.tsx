import NavLinksList from "./NavLinkList"
import { Link } from "react-router-dom"
import App from "../../App"
// npm modules
// types
import { User } from '../../types/models'

//stylesheets
import styles from './NavBar.module.css'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props


  return (
    <div id="nav-container">
      <Link to='/'>
      </Link>
      <NavLinksList user={user} handleLogout={handleLogout} />
    </div>
  )
}

export default NavBar
