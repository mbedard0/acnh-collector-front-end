import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const VillagerShow = (props) => {
  const location = useLocation()
  // need to add an add button
  // button that allows you to select a list
  return (
    <>
    <div>
      {location.state.name}
    </div>
    </>
  );
}

export default VillagerShow;