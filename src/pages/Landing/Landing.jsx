import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <>
      <div className='mt-10 content-center'>
          <h1>hello, {user ? user.name : 'friend'}</h1>
          {user ? <div className='link link-primary'><Link to="/changePassword">Change Password</Link></div> : ''}
      </div>
    </>
  )
}

export default Landing
