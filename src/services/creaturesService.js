import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/creatures`

async function getAllFish() {
  try {
    const response = await fetch(BASE_URL)
    return response.json()
  } catch(e) {
    console.log(e)
  }
}

export { getAllFish }