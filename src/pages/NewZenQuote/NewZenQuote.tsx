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


 






interface NewZenQuoteProps {
	user: User | null;
  quotes?: Zen_Quote[];
}
interface FormElements extends HTMLFormControlsCollection {
  quote: HTMLInputElement
}

interface FormElement extends HTMLFormElement {
 elements: FormElements
}


const handleFormSubmit = (e: React.FormEvent<FormElement>) => {
      console.log(e.currentTarget.elements.quote.value, "This is working");
          quoteService.create(e.currentTarget.elements.quote.value);


      e.preventDefault();
      console.log(e.currentTarget.elements.quote.value)
    }

    
   
    const NewZenQuote = (props:NewZenQuoteProps): JSX.Element => {

    return (
    <> 
    <h1>New Zen Quote</h1>
    <main className={styles.container}>
      <form onSubmit={handleFormSubmit}>
        <div>
        <label htmlFor="title-input">Add Zen Quote:</label>
        <input
          required
          type="text"
          name="title"
          id="quote"
          />
          </div>
          <button id="formButton" type="submit">SUBMIT</button>
          </form>
          </main>
    </>
    )
  }
  
  
  
  


export default NewZenQuote