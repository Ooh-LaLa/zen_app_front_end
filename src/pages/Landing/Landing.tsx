// stylesheets
import styles from './Landing.module.css'


//services
// services
import * as authService from '../../services/authService'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
  handleLogout: () => void
}

const Landing =  ({ user, handleLogout }: LandingProps): JSX.Element => {
  // const { user } = props
  const handleDeleteAccount = async(): Promise<void> => {
    
    handleLogout()
  }
  return (
    <main className={styles.container}>
     <h1>Home Page</h1>
    </main>
  )
}

export default Landing
