import React, { useState, useEffect } from 'react';
import * as clothingService from '../../services/clothingService'

const Clothing = (props) => {
  const [clothing, setClothing] = useState([])

  useEffect(() => {
    async function getClothing() {
      const allClothing = await clothingService.getAllClothing()
      setClothing(allClothing)
    }
    getClothing()
  }, [])

  return (
    <>
    {clothing.map(clothes => {
      return(
        <div>
        {clothes.name}
        </div>
      )
    })}
    </>
  );
}

export default Clothing;