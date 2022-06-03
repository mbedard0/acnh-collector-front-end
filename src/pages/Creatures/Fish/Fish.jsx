import React, { useState, useEffect } from 'react';
import * as creaturesService from '../../../services/creaturesService'
import { Link } from 'react-router-dom'

const Fish = (props) => {
  const [fish, setFish] = useState([])

  useEffect(() => {
    async function getFish() {
      const allFish = await creaturesService.getAllFish()
      setFish(allFish)
    }
    getFish()
  }, [])

  return (
    <>
      <div>
        Fish
      </div>
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
          {fish.map(fish => {
            return (
              <tbody key={fish.number}>
                <tr class="hover">
                  <th></th>
                  {/* {console.log(fish)} */}
                  <td>
                    <Link
                      to={`/fish/${fish.number}`}
                      state={fish}
                    >
                      <div class="flex items-center space-x-3">
                        <div class="avatar">
                          <div class="mask mask-squircle w-12 h-12">
                            <img src={fish.image_url} alt="fish graphic" />
                          </div>
                        </div>
                        <div class="font-bold">
                          {fish.name}
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td>{fish.location}</td>
                  <td>
                    <div>
                      North: {fish.availability_north[0].months}
                    </div>
                    <div>
                      South: {fish.availability_south[0].months}
                    </div>
                  </td>
                  <td>
                    <div>
                      North: {fish.availability_north[0].time}
                    </div>
                    <div>
                      South: {fish.availability_south[0].time}
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

export default Fish;