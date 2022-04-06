import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as creaturesService from '../../services/creaturesService'

const Creatures = (props) => {
  return (
    <>
      <div>
        <ul>
          <li className='link link-primary'>
            <Link to='/fish'>Fish</Link>
          </li>
          <li className='link link-primary'>
            <Link to='/bugs'>Bugs</Link>
          </li>
          <li className='link link-primary'>
            <Link to='/sea-creatures'>Sea Creatures</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Creatures;