import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CreateListForm from '../../components/CreateList/CreateListForm';

const CreateList = (props) => {
  const navigate = useNavigate()

  return (
    <div className='flex justify-center w-5/5'>
      {console.log(props)}
      <CreateListForm profile={props.profile}/>
    </div>
  )
}

export default CreateList;