import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/villagers`

async function getAllVillagers() {
  try {
    const response = await fetch(BASE_URL)
    return response.json()
  } catch(e) {
    console.log(e)
  }
}

export { getAllVillagers }