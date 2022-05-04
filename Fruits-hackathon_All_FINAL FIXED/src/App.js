import React from 'react'

// import route ability
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import PageNavBar from './components/PageNavBar'
import Home from './components/Home'
import FruitsIndex from './components/fruits/FruitsIndex'
import FruitShow from './components/fruits/FruitShow'
import Salad from './components/fruits/Salad'
import NotFound from './components/NotFound'


const App = () => {


  return (
    <main className='site-wrapper'>
      <BrowserRouter>
        <PageNavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fruits' element={<FruitsIndex />} />
          <Route path='/fruits/:id' element={<FruitShow />} />
          <Route path='/salad' element={<Salad />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
