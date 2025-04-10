import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Rootlayout from './layout/Rootlayout'
import Home from './pages/Home'
import ContactPart from './pages/ContactPart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route element={<Rootlayout/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/ContactPart' element={<ContactPart/>} />
      </Route>
     </Routes>
    </>
  )
}

export default App
