//npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// stylesheets
import styles from './NewZenQuote.module.css'


// services
import * as authService from '../../services/authService'
import * as quoteService from '../../services/quoteService'

// types
import { User, Profile, Zen_Quote } from '../../types/models'
// import { createZenQuote } from '../../services/newQuoteService'

interface NewZenQuoteProps {
	user: User | null;
  quotes?: Zen_Quote[];
}

const NewZenQuote = (props:NewZenQuoteProps): JSX.Element => {
const {quotes} = props

  return (
    <> 
    <h1>New Zen Quote</h1>
    
    </>
    )
      }
  
  
  
  


export default NewZenQuote