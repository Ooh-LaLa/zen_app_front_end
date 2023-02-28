//types
import { Zen_Quote } from '../types/models'

//services
import * as tokenService from './tokenService'




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

const create = async (quoteData:string) => {
  try {
    const res = await fetch(`${BASE_URL}/new`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(quoteData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function editQuote(quoteData: QuoteFormData): Promise<void> {
  try {
    const res = await fetch(`${BASE_URL}/edit`, {
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
    await fetch(`${BASE_URL}/delete`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
  } catch (error) {
    throw error
  }
}

export { getAllQuotes, create, editQuote, deleteQuote }



