
//npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
// stylesheets
import styles from './MyQuotes.module.css'


// services
import * as authService from '../../services/authService'
import * as quoteService from '../../services/quoteService'

// types
import { User, Profile, Zen_Quote } from '../../types/models'
import { getMyQuotes } from '../../services/quoteService'




interface MyQuotesProps {
	user: User | null;
  quotes?: Zen_Quote[];
}

interface FormElements extends HTMLFormControlsCollection {
  quote: HTMLInputElement
}

interface FormElement extends HTMLFormElement {
 elements: FormElements
}


const MyQuotes = (props:MyQuotesProps): JSX.Element => {
  const {quotes} = props    
  
  if(!quotes?.length) return <p>No quotes yet</p>
  
  const handleEditQuote= (e: React.FormEvent<FormElement>) => {
    const newFormData = {quote: e.currentTarget.elements.quote.value}
    quoteService.create(newFormData);
    const navigate = useNavigate()
    navigate('/myquotes')
  
    
    e.preventDefault();
  }
  
  const handleDeleteQuote= (e: React.FormEvent<FormElement>) => {
    const newFormData = {quote: e.currentTarget.elements.quote.value}
    quoteService.create(newFormData);
    const navigate = useNavigate()
    navigate('/myquotes')
  
  
    e.preventDefault();
  }
  
  return(

  <> 
  <h1>My Quotes</h1>
  <main className={styles.container}>
  {quotes.map((myQuotes ) =>
   <div key={myQuotes.id}><form onSubmit={handleDeleteQuote}>
      <label htmlFor="title-input">Quote:</label>
      <input
        required
        type="text"
        name="quote"
        id="quote"
        defaultValue={myQuotes.quote}
        // value={myQuotes.quote}
        />
        <input
        required
        type="hidden"
        name="id"
        id="id"
        defaultValue={myQuotes.id}
        // value={myQuotes.id}
        />
        <button id="formButton" type="submit">UPDATE</button>
        </form>
        <form onSubmit={handleDeleteQuote}>
        <input
        required
        type="hidden"
        name="id"
        id="id"
        defaultValue={myQuotes.id}
        // value={myQuotes.id}
        />
        <button>
        DELETE QUOTE
        </button>
        </form>
        </div>
      )}
      </main>
  </>
  )
}
    


export default MyQuotes