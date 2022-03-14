import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const VillagerShow = (props) => {
  const location = useLocation()

  return (
    <>
    <div>
      {location.state.name}
    </div>
    </>
  );
}

export default VillagerShow;