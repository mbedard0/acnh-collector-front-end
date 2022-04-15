import React, { useState, useEffect } from 'react';
import * as furnitureService from '../../services/furnitureService'

const Furniture = (props) => {
  const [furniture, setFurniture] = useState([])

  useEffect(() => {
    async function getFurniture() {
      const allFurniture = await furnitureService.getAllFurniture()
      setFurniture(allFurniture)
    }
    getFurniture()
  }, [])

  return (
    <>
    {furniture.map(furniture => {
      return(
        <div>
        {furniture.name}
        </div>
      )
    })}
    </>
  );
}

export default Furniture;