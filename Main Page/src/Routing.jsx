import React from 'react'
import { Routes, Route } from "react-router-dom"
import Homepage from './Pages/Homepage'
import SignIn from './Pages/SignIn'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path='sign' element={<SignIn />} />
    </Routes>
  )
}
export default Routing