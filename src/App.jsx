
import Navbar from './Header/Navbar'
import Hero from './Header/Hero'
import Body from './Body/Body'
import { QueryContextProvider } from './context/QueryContext'

function App() {

  return (
    <>
      <QueryContextProvider>
        <Navbar />
        <Hero />
        <Body />
      </QueryContextProvider>
    </>
  )
}

export default App
