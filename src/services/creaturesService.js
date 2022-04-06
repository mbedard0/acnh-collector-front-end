import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/creatures`

async function getAllFish() {
  try {
    const response = await fetch(`${BASE_URL}/fish`)
    return response.json()
  } catch(e) {
    console.log(e)
  }
}

async function getAllBugs() {
  try {
    const response = await fetch(`${BASE_URL}/bugs`)
    return response.json()
  } catch(e) {
    console.log(e)
  }
}

export { getAllFish, getAllBugs}