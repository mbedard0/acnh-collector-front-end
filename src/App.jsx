import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { useEffect } from 'react'

import * as authService from './services/authService'
import * as profileService from './services/profileService'

import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import CreateList from './pages/CreateList/CreateList'
import Villagers from './pages/Villagers/Villagers.jsx'
import VillagerShow from './pages/Villagers/VillagerShow'
import YourLists from './pages/YourLists/YourLists'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      profileService.getProfile(user._id)
      .then((profile) => setProfile(profile))
    }
  }, [user])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin} /> : <Navigate to="/login" />}
        />
        <Route
          path="/create-list"
          element={<CreateList profile={profile} />}
        />
        <Route
          path='/villagers'
          element={<Villagers />}
        />
        <Route
          path='/villagers/:id'
          element={<VillagerShow />}
        />
        <Route
          path='/lists'
          element={<YourLists profile={profile}/>}
        />
      </Routes>
    </>
  )
}

export default App
