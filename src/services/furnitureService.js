const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/furniture`

async function getAllFurniture() {
  try {
    const response = await fetch(`${BASE_URL}/`)
    return response.json()
  } catch(e) {
    console.log(e)
  }
}

export { getAllFurniture }