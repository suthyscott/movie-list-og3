import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  useEffect(() => {
    axios.post('/movies', {movieName: 'Logan', imgUrl: 'asdf'})
      .then(res => console.log(res))
  }, [])
  return (
    <>
      
    </>
  )
}

export default App
