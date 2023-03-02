// npm modules
import { NavLink } from "react-router-dom";

// types
import { User } from "../../types/models";

//stylesheets
import styles from "./NavBar.module.css";

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props;

  return (
    <nav id={styles.nav} className={styles.navContainer}>
      {user ? (
        <>
          <div className={styles.navLeft}>
            <NavLink className={styles.link} to="/account">
              Welcome, {user?.name}
            </NavLink>
            <NavLink className={styles.link} to="/">
              Home
            </NavLink>
            <NavLink className={styles.link} to="/new">
              Add Zen Quote
            </NavLink>
            <NavLink className={styles.link} to="/myquotes">
              My Zen Quotes
            </NavLink>
          </div>
          <div className="navRight">
            <NavLink to="" onClick={handleLogout}>
              LOG OUT
            </NavLink>
          </div>
        </>
      ) : (
        <>
          <div className="navRight">
            <NavLink to="/login">Log In</NavLink>
            <br></br>
            <NavLink to="/signup">Sign Up</NavLink>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
