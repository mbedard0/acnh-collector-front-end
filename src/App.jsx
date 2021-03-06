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
import Furniture from './pages/Furniture/Furniture'
import Clothing from './pages/Clothing/Clothing'
import Villagers from './pages/Villagers/Villagers.jsx'
import VillagerShow from './pages/Villagers/VillagerShow'
import YourLists from './pages/YourLists/YourLists'
import MuseumArtifacts from './pages/MuseumArtifacts/MuseumArtifacts'
import Art from './pages/MuseumArtifacts/Art/Art'
import Creatures from './pages/Creatures/Creatures'
import Fish from './pages/Creatures/Fish/Fish'
import FishShow from './pages/Creatures/Fish/FishShow'
import Bugs from './pages/Creatures/Bugs/Bugs'
import SeaCreatures from './pages/Creatures/SeaCreatures/SeaCreatures'
import Fossils from './pages/MuseumArtifacts/Fossils/Fossils'
import ListShow from './pages/YourLists/ListShow'
import BugShow from './pages/Creatures/Bugs/BugShow'
import SeaCreaturesShow from './pages/Creatures/SeaCreatures/SeaCreaturesShow'

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
          path='/furniture'
          element={<Furniture profile={profile} />}
        />
        <Route
          path='/clothing'
          element={<Clothing profile={profile} />}
        />
        <Route
          path='/museum-artifacts'
          element={<MuseumArtifacts profile={profile} />}
        />
        <Route
          path='/creatures'
          element={<Creatures profile={profile} />}
        />
        <Route
          path='/fish'
          element={<Fish profile={profile} />}
        />
        <Route 
          path='/fish/:id'
          element={<FishShow profile={profile} />}
        />
        <Route
          path='/bugs'
          element={<Bugs profile={profile} />}
        />
        <Route
          path='/bugs/:id'
          element={<BugShow profile={profile} />}
        />
        <Route
          path='/sea-creatures'
          element={<SeaCreatures profile={profile} />}
        />
        <Route
          path='/sea-creatures/:id'
          element={<SeaCreaturesShow profile={profile} />}
        />
        <Route
          path='/fossils'
          element={<Fossils profile={profile} />}
        />
        <Route
          path='/artwork'
          element={<Art profile={profile}/>}
        />
        <Route
          path='/furniture'
          element={<Furniture profile={profile} />}
        />
        <Route
          path='/villagers'
          element={<Villagers profile={profile} />}
        />
        <Route
          path='/villagers/:id'
          element={<VillagerShow profile={profile} />}
        />
        <Route
          path='/lists'
          element={<YourLists profile={profile} />}
        />
        <Route
          path='/lists/:id'
          element={<ListShow profile={profile} />}
        />
      </Routes>
    </>
  )
}

export default App
