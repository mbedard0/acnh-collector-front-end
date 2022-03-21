import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/lists`

function create(listData) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
    },
    body: JSON.stringify(listData)
  })
  .then(res => res.json())
}
export { create }