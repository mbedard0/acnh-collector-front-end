import React, { useState, useEffect } from 'react';
import * as creaturesService from '../../../services/creaturesService'

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
      {fish.map(fish => {
        return (
          <div>
            {fish.name}
          </div>
        )
      })}
    </>
  );
}

export default Fish;