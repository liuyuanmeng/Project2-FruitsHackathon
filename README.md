# Project2-FruitsHackathon
This was the second project for the Software Engineering Immersive course with GA.
For this project, I worked in a team with two classmates [Jack](https://github.com/jackbdr) and [Fran](https://github.com/fransurf)
It was a 1.5-day hackathon.

The app has been deployed with Netlify and is available [Here] (https://fruity-4-you.netlify.app/)

## Brief
* <36 hours
* Consume a public API – this could be anything but it must make sense for your project
* Have several components - At least one classical and one functional
* The app should include a router - with several “pages”
* Include wireframes - that you designed before building the app
* Be deployed online and accessible to the public

## Overview

Fruity4You is an app that calculates all the nutritional information after users three choices of their favourite fruits.
You can find all the fruits on the fruits page. The dropdown and the search bar give you a shortcut if you want to search for any individual fruit or fruits in the same family.

## Technologies used:
* React.js
* JavaScript [Es6+]

* React-bootstrap
* Axios
* Sass

* React Router

## Dev tools
* Insomnia
* VSCode

* GitHub
* Excalidraw (Wireframing)
* Notify (deployment)


## API Used:
[fruityvice](https://www.fruityvice.com/)

## Approach Taken
**Planing and Preparation:**\
As a group, we quickly decided on the API. We were limited to free APIs, and it was only a 1.5 days project, My teammates and I decided we would code along together and for a small quick project like this it worked really well. 

This API allows us to:
-Get fruits from the entire database (which contains the name of the fruit, family of the fruit, ID of the fruit, and nutrition information of the fruit)

We used Insomnia to test the response to ensure we got all the information we needed.
<img width="600" alt="Screenshot 2022-06-28 at 11 15 39" src="https://user-images.githubusercontent.com/100864042/177531356-3562fe56-444b-425f-b37c-81f2a8d4b02a.png">

We used Excalidraw to plan the front-end layout and what the website flow would look like.
:<img width="600" alt="Screenshot 2022-06-28 at 11 22 51" src="https://user-images.githubusercontent.com/100864042/177531456-38e8d649-321d-4b23-9d26-7b8f1a16c68b.png">



And decided on the main features we hoped to implement


.Must-Have
-Fruits page
-Individual fruit page
-Navigation bar
-Fruits family dropdown
-Fruits search bar

.Should-Have
-Homepage

.Could-Have
-Fruits nutrition calculator



Now that we were happy with the design and API, we could start building the front end. We decided to work separately to develop our pages but worked closely on zoom. 


My job was to create a page that would display all fruits and have a dropdown and search bar. To make this page, I decided only the image and name of the fruits would be displayed. Once users click on the single fruit will find more information. The users can use the search bar to search fruits by name or family. In the dropdown, users can access all fruits or different families of fruits.

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/100864042/177532531-cbdb1aaf-01bd-464e-a1cb-5f08e6e84c14.gif)


## Search Feature & Dropdown Feature
The filters on my page were implemented using a combination of the useState and use effect React hooks and a handleChange function to define the behaviour when using the filters.
```
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
        console.log(data)
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

const Filters = ({ filters, families, handleChange }) => {
  return (
    <div className='filter-container'>
      {/* Family dropdown */}
      <select className='dropdown' name='family' value={filters.family} onChange={handleChange}>
        <option value='All'>All</option>
        {/* Loop through regionList */}
        {families.map(family => <option key={family} value={family}>{family}</option>)}
      </select >
      {/* Search field */}
      <input className='search-box' type='text' name='searchTerm' placeholder='Search...' value={filters.searchTerm} onChange={handleChange} />
    </div >
  )
}

export default Filters
```



used RegExp and the filter method inside a useEffect React Hook to filter fruits based on the dropdown value or the search term. Filter through fruit and add matching fruits to filteredFruits state
``` useEffect(() => {
    
    if (fruits.length) {
      // Generate search term
      const regexSearch = new RegExp(filters.searchTerm, 'i')
   
      const filtered = fruits.filter(fruit => {
        return regexSearch.test(fruit.name) && (fruit.family === filters.family || filters.family === 'All')
      })
      setFilteredFruits(filtered)
    }
  }, [filters, fruits])
  ```

Displayed the fruit's name, image, and family. API didn’t provide pictures of fruits, so we used images stored locally that we named purposely to match our fruit names 
``` <Container className='fruits-list'>
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
                    <Card.Body className="fruit-names">
                      <Card.Title className='text-center mb-0'>{name} - {family}</Card.Title>
  ```

##  Reflection

### Key Learnings 
* Separating the .js files into different components to make the code cleaner
* Learning how to consume a public API
* Using React/Insomnia for the first time


###  Wins 

* Learning to group code and delegate tasks whilst working to meet a deadline
* Learning how other people approach code.
* Planning is the key to any project but is especially important under a short deadline.



### Future Features
Mobile responsive 

