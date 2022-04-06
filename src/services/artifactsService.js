import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/artifacts`

async function getAllFossils() {
  try {
    const response = await fetch(`${BASE_URL}/fossils`)
    return response.json()
  } catch(e) {
    console.log(e)
  }
}

export { getAllFossils }