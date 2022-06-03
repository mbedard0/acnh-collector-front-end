import React, { useState, useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import * as listService from '../../services/listService'

const VillagerShow = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [data, setData] = useState({
    villagerId: location.state.id,
    profile: '',
    list: ''
  })

  const handleAdd = async e => {
    e.preventDefault()
    try {
      const finalData = await setData({ ...data, list: e.target.value })
      listService.addVillager(finalData)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (props.profile !== undefined) {
      setData({
        ...data,
        profile: props.profile._id
      })
    }
  }, [props.profile])



  return (
    <>
      {console.log(location.state)}
      <div className='flex'>
        <div>
        <img src={`${location.state.image_url}`}/>
        </div>
        <div>
          <div class="font-bold">
            {location.state.name}
          </div>
          <div class="text-sm opacity-50">
            {location.state.quote}
          </div>
        </div>
        {props.profile ?
          <div>
            <ul>
              <li tabIndex="0" className="dropdown dropdown-end">
                <button></button>
                <a className="btn">
                  Add to List
                </a>
                <ul class="p-2 shadow bg-base-100 rounded-box dropdown-content">
                  {props.profile.lists.map((list) => {
                    return (
                      <li value={list._id}>
                        {list.listName}
                      </li>
                    )
                  })}
                </ul>
              </li>
            </ul>
          </div>
          : ''
        }
      </div>
    </>
  );
}

export default VillagerShow;