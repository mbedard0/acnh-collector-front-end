import React, { useState, useEffect } from 'react';
import * as artifactsService from '../../../services/artifactsService'

const Art = (props) => {
  const [artwork, setArtwork] = useState([])

  useEffect(() => {
    async function getArtwork() {
      const artwork = await artifactsService.getAllArt()
      setArtwork(artwork)
    }
    getArtwork()
  }, [])


  return (
    <>
      {artwork.map(art => {
        return (
          <div>
            {art.name}
          </div>
        )
      })}
    </>
  );
}

export default Art;