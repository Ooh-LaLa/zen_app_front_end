//stylesheets
import styles from './EditZenQuote.module.css'

//npm modules
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom'

//services
import * as quoteService from '../../services/quoteService'


type EditQuoteProps = {
  handleEditQuote: (quoteData: QuoteFormData) => void
}



const EditZenQuote = (props:EditQuoteProps): JSX.Element => {
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState<QuoteFormData>({
    quote: '',
    author: '',
    
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    try {
      props.handleEditQuote(formData)
      navigate('/api/quotes/edit')
    } catch (error) {
      throw error
    }
  }

  return (
    <>
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          Edit quote
        </label>
        <textarea 
          name="quote" 
          id="quote"
          onChange={handleTextAreaChange}
          >

        </textarea>
        <label>Author</label>
        <input type="text" name="author" onChange={handleInputChange}/>
        <button type="submit">Update Quote</button>
      </form>
    </main>
    </>
  ) 
  
} 
    
    export default EditZenQuote

  
