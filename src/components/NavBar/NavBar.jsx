import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <div className='navbar bg-base-300 rounded-b-lg'>
            <div class="flex-1">
              <div className="btn btn-ghost normal-case text-xl"><Link to='/'>ACNH Collector</Link></div>
            </div>
            <div class="flex-none">
              <ul class="menu menu-horizontal p-0">
                <li><Link to='/creatures'>Creatures</Link></li>
                <li><Link to='/museum-artifacts'>Museum Artifacts</Link></li>
                <li><Link to='/furniture'>Furniture</Link></li>
                <li><Link to='clothing'>Clothing</Link></li>
                <li><Link to="/villagers">Villagers</Link></li>
                <li tabIndex="0" className="dropdown dropdown-end">
                  <a className="">
                    Lists
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                  </a>
                  <ul class="p-2 shadow bg-base-100 rounded-box dropdown-content">
                    <li><Link to="/create-list">Create a List</Link></li>
                    <li><Link to='/lists'>Your Lists</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
        </div>
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
