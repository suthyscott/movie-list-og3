import {useEffect} from 'react'
import axios from 'axios'

const Home = () => {

  const getAllMoviesFromBackend = () => {
    axios.get('/api/movies')
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  useEffect(getAllMoviesFromBackend, [])
  

  // Add a .map to display movies
  return (
    <div>Home</div>
  )
}

export default Home