import React, { useState } from 'react'
import Api from '../../Api'
import Card from './Card'
import { useRef, useEffect } from 'react'
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";
// import "..../App.css";
import "./Cards.css";


const Cards = ({category}) => {

  const containerRef = useRef(null);

  const[Data, setData] = useState(null);

  useEffect(() => {
    async function fetchBackgroundImg() {

      let response = await Api("movie",category);
  
      setData({...response});
    }
    fetchBackgroundImg();

  },[] );

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -240, // Adjust this value as needed for the scroll distance
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 240, // Adjust this value as needed for the scroll distance
        behavior: 'smooth',
      });
    }
  };

  function clickhandler(e){
    const element = e.target;
    // console.log(element);
    // console.log(element.classList);
    const spans = document.querySelectorAll('.Basanti')
    for(var i=0; i<spans.length; i++){
      spans[i].classList.remove('Active');
    }
    element.classList.add('Active');

  
  }

  // console.log(Data);

  return (
    <div className='w-full relative py-4'>

    <div className='max-w-[1200px] mx-auto flex justify-between py-5'>
      <h2 className='text-[24px] text-white'>{category.replace('_', ' ').toUpperCase()}</h2>
      
    <div className='flex relative items-center justify-between h-[34px] w-52 p-1 bg-white rounded-3xl '>
      <span className='Basanti text-[20px] w-[50%] rounded-3xl flex justify-center Active cursor-pointer'  onClick={clickhandler}>Day</span>
      <span className='Basanti text-[20px] w-[50%] rounded-3xl flex justify-center cursor-pointer' onClick={clickhandler}>Week</span>
      {/* <div className='absolute w-16 h-36 rounded-3xl bg-gradient-to-r from-yellow-500 via-red-500 to-red-800'></div> */}
    </div>
    </div>


    
    <div className=' max-w-[1200px] mx-auto  flex overflow-x-auto  gap-x-3  ' ref ={containerRef}>
  
      {Data && Data.results.map((movie)=>(
        <Card key = {movie.id} movie = {movie}/>
      ))}
    </div>
      {/* <button className='text-[24px] absolute text-red-800 left-[130px] z-1 bottom-60 'onClick={scrollLeft}><FaCircleChevronLeft /></button>
      <button className=' text-[24px] absolute right-[125px] text-red-800 z-1 bottom-60' onClick={scrollRight}> <FaCircleChevronRight /></button> */}

    </div>
  )
}

export default Cards