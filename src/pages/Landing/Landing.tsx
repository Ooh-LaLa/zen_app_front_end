//npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// stylesheets
import styles from './Landing.module.css'


// services
import * as authService from '../../services/authService'
import * as quoteService from '../../services/quoteService'

// types
import { User, Profile, Zen_Quote } from '../../types/models'
import { getAllQuotes } from '../../services/quoteService'

interface LandingProps {
	user: User | null;
  quotes?: Zen_Quote[];
}

const Landing = (props:LandingProps): JSX.Element => {
const {quotes} = props  
  
if(!quotes?.length) return <p>No quotes yet</p>

return(
  <>
  <main className={styles.landing_main}>
  <div className={styles.landing_img}>
  <h1 className={styles.landing_h1}>Zen Quote App</h1>
    {quotes.map((currentQuote ) =>
      <p key={currentQuote.id}>{currentQuote.quote}</p>
    )}
    </div>
    </main>
  </>
  )
  }
  
  
  
  
  


export default Landing 