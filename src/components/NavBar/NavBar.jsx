import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <div className='navbar'>
            <div class="flex-1">
              <a className="btn btn-ghost normal-case text-xl">Home</a>
            </div>
            <div class="flex-none">
              <ul class="menu menu-horizontal p-0">
                <li><Link>Creatures</Link></li>
                <li><Link>Museum artifacts</Link></li>
                <li><Link>Furniture</Link></li>
                <li><Link>Clothing</Link></li>
                <li><Link to="/villagers">Villagers</Link></li>
                <li tabindex="0">
                  <a>
                    Lists
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                  </a>
                  <ul class="p-2 bg-base-100">
                    <li><Link to="/create-list">Create a List</Link></li>
                    <li><Link to='/lists'>Your Lists</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          {/* 
          <div class="navbar bg-base-100">
          <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
          <div class="flex-none">
            <ul class="menu menu-horizontal p-0">
              <li><a>Item 1</a></li>
              <li tabindex="0">
                <a>
                  Parent
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul class="p-2 bg-base-100">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
        </div>
        */}
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
