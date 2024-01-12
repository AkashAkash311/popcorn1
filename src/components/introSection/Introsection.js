// import React, { useEffect, useState } from 'react'
import Header from './Header'
// import Api from '../../Api'
import Introinfo from './Introinfo'



const Introsection = ({Data}) => {

  if(Data){
    const index = Math.floor(Math.random()*Data.results.length);
    var url = `https://image.tmdb.org/t/p/original/${Data.results[index].backdrop_path}`;
  }

  const containerStyle = {
    backgroundImage: `url(${url})`,
    backgroundSize: '100% 100%',
  };

  return (
    <div className='min-h-[90vh] min-w-screen bg-black text-white relative ' style={containerStyle}>
      
        <Header />
        <Introinfo/>
        {/* gradient khater h yo niche aala div front page k niche gradient h ek */}
        <div className='w-full h-[250px] bg-gradient-to-b from-transparent to-black absolute bottom-0'></div>
        
    </div>
  )
}

export default Introsection