import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as creaturesService from '../../../services/creaturesService'

const SeaCreatures = (props) => {
  const [seaCreatures, setSeaCreatures] = useState([])

  useEffect(() => {
    async function getSeaCreatures() {
      const allSeaCreatures = await creaturesService.getAllSeaCreatures()
      setSeaCreatures(allSeaCreatures)
    }
    getSeaCreatures()
  }, [])


  return (
    <>
      <div>Sea Creatures</div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Location</th>
              <th>Time of Year</th>
              <th>Time of Day</th>
            </tr>
          </thead>
          {seaCreatures.map(seaCreature => {
            return (
              <tbody key={seaCreature.number}>
                <tr class="hover">
                  <th></th>
                  <td>

                    <Link
                      to={`/sea-creatures/${seaCreature.number}`}
                      state={seaCreature}
                    >
                      <div class="flex items-center space-x-3">
                        <div class="avatar">
                          <div class="mask mask-squircle w-12 h-12">
                            <img src={seaCreature.image_url} alt="seaCreature graphic" />
                          </div>
                        </div>
                        <div className="font-bold">
                          {seaCreature.name}
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td>{seaCreature.location}</td>
                  <td>
                    <div>
                      North: {seaCreature.availability_north[0].months}
                    </div>
                    <div>
                      South: {seaCreature.availability_south[0].months}
                    </div>
                  </td>
                  <td>
                    <div>
                      North: {seaCreature.availability_north[0].time}
                    </div>
                    <div>
                      South: {seaCreature.availability_south[0].time}
                    </div>
                  </td>

                </tr>
              </tbody>
            )
          })}
        </table>
      </div>

    </>
  );
}

export default SeaCreatures;