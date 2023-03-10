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
  const handleDeleteAccount = async(): Promise<void>  => {
    await authService.deleteAccount()
    handleLogout()
  }
  return (
    <main className={styles.container}>
    <img className={styles.accounts_img} src="/bee.jpg" alt="bee"/>
    <div className={styles.accounts_img}>
  

      <h1 className={styles.accounts_h1}>Namaste, {user ? user.name : 'zen master'}</h1>

      <a href="/change-password" className={styles.accountsPw}>Change Password</a>
<br></br>
    <section className={styles.accountsBtn}>
      { user && 
        <button className={styles.accountsBtn} onClick={handleDeleteAccount}>
          DELETE ACCOUNT
        </button>
      }
      </section>
    </div>
    </main>
  )
}

export default Account
