// npm modules
import { NavLink } from 'react-router-dom'

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
    <nav className={styles.navContainer}>
       {user ?
        <>
         <div className="navLeft">
            <NavLink to="/account">{user?.name}</NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/new">Add Zen Quote</NavLink>
          </div>
          <div className="navRight">
            <NavLink to="" onClick={handleLogout}>LOG OUT</NavLink>
          </div>
          </>
          :
          <>
          <div className="navRight">
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </div>
          </>
      }
    </nav>
  );
}

export default NavBar
