import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import Search from './Pages/Search'
import Footer from './components/Footer'
import Header from './components/introSection/Header'
import Movie from './Pages/Movie'
import Shows from './Pages/Shows'
// import { Analytics } from '@vercel/analytics/react';



const App = () => {
  return (
    <div className='flex flex-col min-w-screen bg-black'>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Search/:moviename" element={<Search/>}/>
      <Route path='/movie/:movie_id' element={<Movie/>}/>
      <Route path='/shows/' element={<Shows/>}/>
      
    </Routes>
    <Footer/>
    </div>
  )
}

export default App