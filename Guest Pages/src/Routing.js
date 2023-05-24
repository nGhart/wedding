import React from 'react'
import {Routes, Route} from "react-router-dom"
import Guesthome from './Pages/Guesthome'
import Programme from './Pages/Programme'
import RSVP from './Pages/RSVP'
import Registry from './Pages/Registry'
import RegistryItems from './Pages/RegistryItems'
import Role from './Pages/Role'
import Directions from './Pages/Directions'
import Seating from './Pages/Seating'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Guesthome/>}/>
      <Route path='programme' element={<Programme/>}/>
      <Route path="rsvp" element={<RSVP/>}/>
      <Route path='registry' element={<Registry/>}/>
      <Route path='role' element={<Role/>}/>
      <Route path="/registry/:id" element={<RegistryItems/>}/>
      <Route path='directions' element={<Directions/>}/>
      <Route path='/seating/*' element={<Seating/>}/>
    </Routes>
  )
}

export default Routing