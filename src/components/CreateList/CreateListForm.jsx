import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as listService from '../../services/listService'

const CreateListForm = (props) => {
  const navigate = useNavigate()

  const [listData, setListData] = useState({
    listName: '',
    description: ''
  })
  
  const handleChange = e => {
    setListData({
      ...listData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
      e.preventDefault()
      try {
        console.log('test')
        listService.create(listData)
        navigate('/')
      } catch (err) {
        props.updateMessage(err.message)
      }
  }

  const { listName, description } = listData

  const isFormInvalid = () => {
    return !(listName && description)
  }

  return (
    <>
      <div
        autoComplete="off"
        className='max-w-4l'
      >
        <label>
          <h4>List Name</h4>
          <input
            type="text"
            class=""
            placeholder="Name"
            name="listName"
            onChange={handleChange}
            value={listName}
          />
        </label>
        <label>
          <h4>Description</h4>
          <input
            type="text"
            class=""
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={description}
          />
        </label>
        <div className='mt-7 mb-10 flex justify-center'>
          <button disabled={isFormInvalid()} className='btn mx-2' onClick={handleSubmit}>
            Create
          </button>
          <Link to="/">
            <button className='btn mx-2'>Cancel</button>
          </Link>
        </div>
      </div>

    </>
  );
}

export default CreateListForm;