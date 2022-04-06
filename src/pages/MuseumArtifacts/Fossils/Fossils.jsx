import React, { useState, useEffect } from 'react';
import * as artifactsService from '../../../services/artifactsService'

const Fossils = (props) => {
  const [fossils, setFossils] = useState([])

  useEffect(() => {
    async function getArtifacts() {
      const allFossils = await artifactsService.getAllFossils()
      setFossils(allFossils)
    }
    getArtifacts()
  }, [])


  return (
    <>
    {fossils.map(fossil => {
      return(
        <div>
          {fossil.name}
        </div>
      )
    })}
    </>
  );
}

export default Fossils;