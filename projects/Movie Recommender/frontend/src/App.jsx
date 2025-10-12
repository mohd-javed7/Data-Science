import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Trending from './Components/Trending'
import MovieDetails from './Components/MovieDetails'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path='/' element={<>
          <Hero darkMode={darkMode}/>
          <Trending darkMode={darkMode}/>
        </>}/>
        <Route path='/movie/:id' element={<MovieDetails darkMode={darkMode}/>}/>
      </Routes>
    </Router>
  )
}


export default App
