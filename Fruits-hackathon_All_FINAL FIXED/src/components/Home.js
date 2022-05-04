import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='home-wrapper'>
      <div className='hero text-center'>
        <div className='hero-container'>
          <h1 className='display-1'>Fruity 4 You</h1>
          <p className='lead'>What do you really know about fruit?</p>
          <div className='btn-container'>
            <Link to="/fruits" className='btn allfruit-btn'>All fruits</Link>
            <Link to="/salad" className='btn salad-btn'>Make a salad</Link>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Home
