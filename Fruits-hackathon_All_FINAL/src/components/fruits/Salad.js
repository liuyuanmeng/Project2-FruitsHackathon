import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Spinner from '../Spinner'

const Salad = () => {

  const [fruits, setFruits] = useState(null)
  const [errors, setErrors] = useState(false)
  const [fruit1, setFruit1] = useState({
    name: '',
    calories: '',
    carbohydrates: '',
    fat: '',
    protein: '',
    sugar: '',
  })
  const [fruit2, setFruit2] = useState({
    name: '',
    calories: '',
    carbohydrates: '',
    fat: '',
    protein: '',
    sugar: '',
  })
  const [fruit3, setFruit3] = useState({
    name: '',
    calories: '',
    carbohydrates: '',
    fat: '',
    protein: '',
    sugar: '',
  })
  const [salad, setSalad] = useState({})


  useEffect(() => {
    const getFruits = async () => {
      try {
        const { data } = await axios.get('/api/fruit/all')
        setFruits(data)
      } catch (err) {
        console.log(err)
      }
    }
    getFruits()
  }, [])


  const handleChange1 = async (e) => {
    // console.log(e.target.value)
    if (e.target.value !== 'noselect') {
      try {
        const { data } = await axios.get(`/api/fruit/${e.target.value}`)
        console.log(data)
        setFruit1({ ...fruit1, name: data.name, calories: data.nutritions.calories, carbohydrates: data.nutritions.carbohydrates, fat: data.nutritions.fat, protein: data.nutritions.protein, sugar: data.nutritions.sugar })
      } catch (err) {
        console.log(err)
      }
    }
  }



  const handleChange2 = async (e) => {
    if (e.target.value !== 'noselect') {
      try {
        const { data } = await axios.get(`/api/fruit/${e.target.value}`)
        // console.log(data)
        setFruit2({ ...fruit2, name: data.name, calories: data.nutritions.calories, carbohydrates: data.nutritions.carbohydrates, fat: data.nutritions.fat, protein: data.nutritions.protein, sugar: data.nutritions.sugar })
      } catch (err) {
        console.log(err)
      }
    }
  }

  const handleChange3 = async (e) => {
    if (e.target.value !== 'noselect') {
      try {
        const { data } = await axios.get(`/api/fruit/${e.target.value}`)
        // console.log(data)
        setFruit3({ ...fruit3, name: data.name, calories: data.nutritions.calories, carbohydrates: data.nutritions.carbohydrates, fat: data.nutritions.fat, protein: data.nutritions.protein, sugar: data.nutritions.sugar })
      } catch (err) {
        console.log(err)
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.keys(fruit1).length === 0 || Object.keys(fruit2).length === 0 || Object.keys(fruit3).length === 0) {
      return
    } else {
      setSalad({
        calories: Math.round((fruit1.calories + fruit2.calories + fruit3.calories) / 3),
        carbohydrates: Math.round((fruit1.carbohydrates + fruit2.carbohydrates + fruit3.carbohydrates) / 3),
        fat: Math.round((fruit1.fat + fruit2.fat + fruit3.fat) / 3),
        protein: Math.round((fruit1.protein + fruit2.protein + fruit3.protein) / 3),
        sugar: Math.round((fruit1.sugar + fruit2.sugar + fruit3.sugar) / 3),
      })
    }
  }




  const reset = () => {
    setFruit1({
      name: '',
      calories: '',
      carbohydrates: '',
      fat: '',
      protein: '',
      sugar: '',
    })
    setFruit2({
      name: '',
      calories: '',
      carbohydrates: '',
      fat: '',
      protein: '',
      sugar: '',
    })
    setFruit3({
      name: '',
      calories: '',
      carbohydrates: '',
      fat: '',
      protein: '',
      sugar: '',
    })
    setSalad({})
  }


  return (
    <section className='salad-page'>
      <div className='slots-container'>
        {/* <img src={'../../images/slots.png'} alt='slot-machine' /> */}
        <div className='flex-container'>
          <div className='slot1'>
            {fruit1.name !== '' && <img src={`../../images/${fruit1.name}.png`} alt={fruit1.name} />}
          </div>
          <div className='slot2'>
            {fruit2.name !== '' && <img src={`../../images/${fruit2.name}.png`} alt={fruit2.name} />}
          </div>
          <div className='slot3'>
            {fruit3.name !== '' && <img src={`../../images/${fruit3.name}.png`} alt={fruit3.name} />}
          </div>
        </div>
      </div>
      <section className='salad-maker'>
        {/* <Container> */}
        {/* <Row> */}
        {fruits ?
          <>
            <form onSubmit={handleSubmit}>
              <h1>Salad Maker</h1>

              <div className='all-fruits'>
                <div className='fruit-container'>
                  <label htmlFor='fruit1'>Choose 1st fruit </label>
                  <select type='text' name='fruit1' onChange={handleChange1}>
                    <option value='noselect'>------------</option>
                    {fruits.map(fruit => <option key={fruit.name} value={fruit.id}>{fruit.name}</option>)}
                  </select>
                </div>

                <div className='fruit-container'>
                  <label htmlFor='fruit2'>Choose 2nd fruit </label>
                  <select type='text' name='fruit2' onChange={handleChange2}>
                    <option value='noselect'>------------</option>
                    {fruits.map(fruit => <option key={fruit.name} value={fruit.id}>{fruit.name}</option>)}
                  </select>
                </div>

                <div className='fruit-container'>
                  <label htmlFor='fruit3'>Choose 3rd fruit </label>
                  <select type='text' name='fruit3' onChange={handleChange3}>
                    <option value='noselect'>------------</option>
                    {fruits.map(fruit => <option key={fruit.name} value={fruit.id}>{fruit.name}</option>)}
                  </select>
                </div>
              </div>

              <button type='submit' className='btn btn-warning w-100'>Make Salad</button>
            </form>
          </>
          :
          <h2 className='text-center'>
            {errors ? 'Something went wrong' : <Spinner />}
          </h2>
        }
        {/* </Row> */}
        {/* </Container> */}

        <div className='salad-info'>
          {/* <h3>Your {fruit1.name} & {fruit2.name} & {fruit3.name} fruit salad (300g/400g/500g/..)</h3> */}
          {salad ?
            <>
              <h4><span>🍽</span> Nutrional info (per 100g)</h4>
              <p><span>Carbohydrates: </span>{salad.carbohydrates}</p>
              <hr />
              <p><span>Protein: </span>{salad.protein}</p>
              <hr />
              <p><span>Fat: </span>{salad.fat}</p>
              <hr />
              <p><span>Calories: </span>{salad.calories}</p>
              <hr />
              <p><span>Sugar: </span>{salad.sugar}</p>
            </>
            :
            <h6>Select three fruits to add to your salad..</h6>
          }
          <button className='btn btn-warning w-100' onClick={reset}>Reset</button>
        </div>
      </section>
    </section>
  )
}

export default Salad

