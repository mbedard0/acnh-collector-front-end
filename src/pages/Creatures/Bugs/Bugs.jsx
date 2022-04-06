import React, { useState, useEffect } from 'react';
import * as creaturesService from '../../../services/creaturesService'

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
      {bugs.map(bugs => {
        return (
          <div>
            {bugs.name}
          </div>
        )
      })}

    </>
  );
}

export default Bugs;