import React, { useState, useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

const BugShow = (props) => {
  const location = useLocation()
  const [data, setData] = useState({
    bugNumber: location.state.number,
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
    </>
  );
}

export default BugShow;