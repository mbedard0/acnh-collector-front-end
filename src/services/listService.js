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

function getUserLists(profileId, cb) {
  return fetch(`${BASE_URL}/${profileId}`, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` }
  })
    .then(res => res.json()
      .then(value => cb(value)))
}

function addVillager(data) {
  return fetch(`${BASE_URL}/${data.list}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
}


export {
  create,
  getUserLists,
  addVillager
}