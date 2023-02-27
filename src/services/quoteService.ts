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


export { getAllQuotes }



