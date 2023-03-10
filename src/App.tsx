// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Account from './pages/Accounts/Accounts'
import NewZenQuote from './pages/NewZenQuote/NewZenQuote'
import EditZenQuote from './pages/MyQuotes/MyQuotes'
import MyQuotes from './pages/MyQuotes/MyQuotes'

// components
import NavBar from './components/NavBar/NavLinkList'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as quoteService from './services/quoteService'
// stylesheets
import './App.css'

// types
import { User, Profile, Zen_Quote } from './types/models'
import { QuoteFormData } from './types/forms'

function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [quotes, setQuotes] = useState<Zen_Quote[]>([])
  const [myQuotes, setMyQuotes] = useState<Zen_Quote[]>([])


  useEffect((): void => {
    const fetchProfiles = async (): Promise<void> => {
      try {
        const profileData: Profile[] = await profileService.getAllProfiles()
        setProfiles(profileData)
      } catch (error) {
        console.log(error)
      }
    }
    if (user) fetchProfiles()
  }, [user])

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  useEffect((): void => {
    const fetchQuotes = async (): Promise<void> => {
      try {
        const quoteData: Zen_Quote[] = await quoteService.getAllQuotes()
        setQuotes(quoteData)
      } catch (error) {
        console.log(error)
      }
    }
    if (user) fetchQuotes()
  }, [user])

  useEffect((): void => {
    const MyQuotes = async (): Promise<void> => {
      try {
        const myQuoteData: Zen_Quote[] = await quoteService.getMyQuotes()
        setMyQuotes(myQuoteData)      
      } catch (error) {
        console.log(error)
      }
    }
    if (user) MyQuotes()
  }, [user])
  

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/account" element={<Account user={user} handleLogout={handleLogout}/>} />
        <Route path="/" element={<ProtectedRoute user={user} > <Landing quotes={quotes} user={user} /> </ProtectedRoute>}/>
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
              <Route path="/myquotes" element={<ProtectedRoute user={user} > <MyQuotes quotes={myQuotes} user={user} /> </ProtectedRoute>}/>

   <Route path="/new" element={<ProtectedRoute user={user} > <NewZenQuote user={user} quotes={quotes}/> </ProtectedRoute>}/>
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
