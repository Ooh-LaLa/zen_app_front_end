//types
import { Zen_Quote } from '../types/models'

//services
import * as tokenService from './tokenService'
import { QuoteFormData } from '../types/forms'
import { login } from './authService'



const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/quotes`

async function getAllQuotes(): Promise<Zen_Quote[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Zen_Quote[]
  } catch (error) {
    throw error
  }
}

const create = async (quoteData:QuoteFormData): Promise<Quote> => {
  try {
    
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(quoteData)
    })
    console.log(res);
    
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function editQuote(quoteData: QuoteFormData, id:number): Promise<void> {
  try {
    const res = await fetch(`${BASE_URL}/myquotes/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quoteData)
    })
    return await res.json() as Quote
  } catch (error) {
    throw error
  }
}

async function deleteQuote(id: number): Promise<void> {
  console.log('QUOTE DELETED!');
  
  try {
    await fetch(`${BASE_URL}/myquotes/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
    })
  } catch (error) {
    throw error
  }
}


async function getMyQuotes(): Promise<Zen_Quote[]> {
  try {
    const res = await fetch(`${BASE_URL}/myquotes`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Zen_Quote[]
  } catch (error) {
    throw error
  }
}


export { getAllQuotes, create, editQuote, deleteQuote, getMyQuotes}



