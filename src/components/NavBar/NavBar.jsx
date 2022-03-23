import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li>Home</li>
            <li>Creatures</li> 
            <li>Museum artifacts</li>
            <li><Link to="/villagers">Villagers</Link></li>
            <li>Furniture</li>
            <li>Clothing</li>
            <li><Link to="/create-list">Create a List</Link></li>
            <li><Link to='/lists'>Your Lists</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li>Home</li>
            <li>Creatures</li> 
            <li>Museum artifacts</li>
            <li><Link to="/villagers">Villagers</Link></li>
            <li>Furniture</li>
            <li>Clothing</li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
