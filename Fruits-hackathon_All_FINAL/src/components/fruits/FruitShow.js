import React, { useState, useEffect } from 'react'
import axios from 'axios'
// react-router-dom components
import { useParams, Link, useNavigate } from 'react-router-dom'
// Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


// import Button from 'react-bootstrap/Button'
const FruitShow = () => {
  // const navigate = useNavigate()
  const { id } = useParams()
  const [fruit, setFruit] = useState(null)
  const [errors, setErrors] = useState(false)
  useEffect(() => {
    const getFruit = async () => {
      try {
        const { data } = await axios.get(`/api/fruit/${id}`)
        console.log('fruit data from get', data)
        console.log(data.name)
        setFruit(data)
      } catch (error) {
        console.log('theres been an error')
        setErrors(true)
      }
    }
    getFruit()
  }, [id])
  return (
    // <h1>Hello!</h1>
    <Container>
      <Row>
        {fruit ?
          <>
            <Col className='fruit-title' xs="12">
              <h1>{fruit.name}</h1>
              <hr />
            </Col>
            <Col className='img-container' md="6">
              <img src={`../../images/${fruit.name}.png`} alt={fruit.name} />
            </Col>
            <Col md="6">
              <h4><span>🍒</span> Nutrional info (per 100g)</h4>
              <p><b>Carbohydrates: </b>{fruit.nutritions.carbohydrates}</p>
              <hr />
              <p><b>Protein: </b>{fruit.nutritions.protein}</p>
              <hr />
              <p><b>Fat: </b>{fruit.nutritions.fat}</p>
              <hr />
              <p><b>Calories: </b>{fruit.nutritions.calories}</p>
              <hr />
              <p><b>Sugar: </b>{fruit.nutritions.sugar}</p>
              <hr />
              <Link to="/fruits" className='btn btn-warning'>Back to fruit</Link>
            </Col>
          </>
          :
          <h2 className='text-center'>
            {/* {errors ? 'Something went wrong! Please try again later!' : <Spinner />} */}
          </h2>
        }
      </Row>
    </Container>
  )
}
export default FruitShow