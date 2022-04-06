const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/clothing`

async function getAllClothing() {
  try {
    const response = await fetch(`${BASE_URL}/`)
    return response.json()
  } catch(e) {
    console.log(e)
  }
}

export { getAllClothing }