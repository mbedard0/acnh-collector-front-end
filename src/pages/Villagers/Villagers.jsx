import React, { useState, useEffect } from 'react';
import * as villagersService from '../../services/villagersService'
import { Link } from 'react-router-dom'

const Villagers = (props) => {
  const [villagers, setVillagers] = useState([])

  useEffect(() => {
    async function getVillagers() {
      const allVillagers = await villagersService.getAllVillagers()
      setVillagers(allVillagers)    
    } 
    getVillagers()
  }, [])

  return (
    <>
      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              {/* <th></th> */}
              <th>Name</th>
              <th>Species</th>
              <th>Personality</th>
              <th>Gender</th>
              <th>Birthday</th>
            </tr>
          </thead>
          {villagers.map(villager => {
            return (
              <tbody key={villager.id}>
              <tr>
                <th></th>
                {/* <td><img src={`${villager.image_url}`}/></td> */}
                <Link
                  to={`/villagers/${villager.id}`}
                  state={villager}
                >
                  <td>{villager.name}</td>
                </Link>
                <td>{villager.species}</td>
                <td>{villager.personality}</td>
                <td>{villager.gender}</td>
                <td>{villager.birthday_month} {villager.birthday_day}</td>
              </tr>
                </tbody>
        )
        })}
      </table>
    </div>

    </>
  );
}

export default Villagers;