import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Carousel from './components/carousel/Carousel'
import Footer from "./components/footer/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Carousel />
      <Routes>
        {/* <Route path='/' element={/> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
