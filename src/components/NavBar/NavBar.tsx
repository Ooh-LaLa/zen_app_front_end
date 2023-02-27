// npm modules
import { NavLink } from 'react-router-dom'

// types
import { User } from '../../types/models'


interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  
  return (
    <nav>
      <NavLink to="/account">{user?.name}</NavLink>
      {user ?
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <br></br>
          <li><NavLink to="/new">Add Zen Quote</NavLink></li>
          <br></br>
          <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
        </ul>
      :
        <ul>
          <li><NavLink to="/login">Log In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
