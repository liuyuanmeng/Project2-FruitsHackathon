
// This components is going to display all cheeses in a list
// import React, { useState, useEffect } from ‘react’
// import axios from ‘axios’
// import { Link } from ‘react - router - dom’
// // Import bootstrap components
// import Container from ‘react - bootstrap / Container’
// import Row from ‘react - bootstrap / Row’
// import Col from ‘react - bootstrap / Col’
// import Card from ‘react - bootstrap / Card’
// // Import spinner
// import Spinner from ‘../utilities/Spinner’
// import Filters from ‘./Filters’

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import Spinner from '../Spinner'
import Filters from './Filters'

// import Apple from '../../images/Apple.jpeg'


const FruitsIndex = () => {
  const [fruits, setFruits] = useState([])
  const [filteredFruits, setFilteredFruits] = useState([])
  const [families, setFamilies] = useState([])
  const [filters, setFilters] = useState({
    family: 'All',
    searchTerm: '',
  })
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
  // ? handleChange updates filter state
  const handleChange = (e) => {
    const newObj = {
      ...filters,
      [e.target.name]: e.target.value,
    }
    setFilters(newObj)
  }
  // ? useEffect that creates our family dropdown options
  useEffect(() => {
    // Checking there are fruits to loop through in the first place
    // On initial page load, fruits will be empty, so we don’t need to create a list
    if (fruits.length) {
      const familyList = []
      fruits.forEach(fruit => familyList.includes(fruit.family) ? '' : familyList.push(fruit.family))
      setFamilies(familyList)
    }
  }, [fruits])
  // ? useEffect that filters the fruits and adds them as a filteredFruits state
  useEffect(() => {
    // Only filter fruits if there are fruits to filter
    if (fruits.length) {
      // Generate search term
      const regexSearch = new RegExp(filters.searchTerm, 'i')
      // Filter through fruit and add matching fruits to filteredFruits state
      const filtered = fruits.filter(fruit => {
        return regexSearch.test(fruit.name) && (fruit.family === filters.family || filters.family === 'All')
      })
      setFilteredFruits(filtered)
    }
  }, [filters, fruits])
  return (
    <section className='page-container'>
      <Container className='fruits-list'>
        <Filters filters={filters} families={families} handleChange={handleChange} />
        {/* <FruitsIndex filteredFruits={filteredFruits} /> */}
        <Row>
          {filteredFruits.map(fruit => {
            const { id, name, family } = fruit
            return (
              <Col key={id} md='6' lg='4' className='fruit mb-4'>
                <Link to={`/fruits/${id}`}>
                  <Card>
                    <Card.Img className='card-img' variant="top" src={`../../images/${fruit.name}.png`} />
                    <Card.Body classname="fruit-names">
                      <Card.Title className='text-center mb-0'>{name} - {family}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            )
          })}
        </Row >
      </Container >
    </section>

  )
}
export default FruitsIndex