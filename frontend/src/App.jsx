import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from "./components/footer/Footer"
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
