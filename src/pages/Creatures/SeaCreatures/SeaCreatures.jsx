import React, { useState, useEffect } from 'react';
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
      {seaCreatures.map(seaCreatures => {
        return (
          <div>
            {seaCreatures.name}
          </div>
        )
      })}
    </>
  );
}

export default SeaCreatures;