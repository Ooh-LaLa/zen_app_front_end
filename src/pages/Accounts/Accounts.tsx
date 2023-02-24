// stylesheets
import styles from './Accounts.module.css'


//services
// services
import * as authService from '../../services/authService'

// types
import { User } from '../../types/models'

interface AccountProps {
  user: User | null;
  handleLogout: () => void
}

const Account =  ({ user, handleLogout }: AccountProps): JSX.Element => {
  // const { user } = props
  const handleDeleteAccount = async(): Promise<void> => {
    await authService.deleteAccount()
    handleLogout()
  }
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'zen master'}</h1>

      <a href="/change-password">Change Password</a>
<br></br>
      {/* <h1>Meow Meow <br/> Beans</h1>
      <img src={logo} alt="A meow meow bean" /> */}

      { user && 
        <button onClick={handleDeleteAccount}>
          DELETE ACCOUNT
        </button>
      }
    </main>
  )
}

export default Account
