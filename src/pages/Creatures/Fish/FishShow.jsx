import React, { useState, useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

const FishShow = (props) => {
  const location = useLocation()
  const [data, setData] = useState({
    fishNumber: location.state.number,
    profile: '',
    list: ''
  })

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
      {/* {console.log(location.state)} */}
      <div className='flex'>
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img class="" src={`${location.state.render_url}`} />
          </div>
        </div>
        <div>
          {location.state.name}
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

export default FishShow;