import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as creaturesService from '../../services/creaturesService'

const Creatures = (props) => {
  return (
    <>
      <div className='link link-primary'>
        <Link to='/fish'>Fish</Link>
      </div>
    </>
  );
}

export default Creatures;