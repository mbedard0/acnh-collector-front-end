import React, { useState, useEffect } from 'react';
import * as creaturesService from '../../../services/creaturesService'
import { Link } from 'react-router-dom';

const Bugs = (props) => {
  const [bugs, setBugs] = useState([])

  useEffect(() => {
    async function getBugs() {
      const allBugs = await creaturesService.getAllBugs()
      setBugs(allBugs)
    }
    getBugs()
  }, [])


  return (
    <>
      <div>
        Bugs
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
          {bugs.map(bug => {
            return (
              <tbody>
                <tr className='hover'>
                  <th></th>
                  <td>
                    <Link
                      to={`/bugs/${bug.number}`}
                      state={bug}
                    >
                      <div class="flex items-center space-x-3">
                        <div class="avatar">
                          <div class="mask mask-squircle w-12 h-12">
                            <img src={bug.image_url} alt="bug graphic" />
                          </div>
                        </div>
                        <div>
                          {bug.name}
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td>
                    {bug.location}
                  </td>
                  <td>
                    <div>
                      North:   {bug.availability_north[0].months}
                    </div>
                    <div>
                      South: {bug.availability_south[0].months}
                    </div>
                  </td>
                  <td>
                    {bug.time}
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

export default Bugs;