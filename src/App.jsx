import { useEffect, useState } from 'react'
import Navbar from './Header/Navbar'
import Hero from './Header/Hero'
import Body from './Body/Body'
import axios from "axios";

function App() {
const [data, setData] = useState(null)
const [error, setError] = useState(null)

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.allorigins.win/raw?url=https://jagokata-api.vercel.app/popular")
      setData(response.data)
    } catch (error) {
      setError(error)
    }
  }
  fetchData()
}, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Body />
    </>
  )
}

export default App
