import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'


const Introinfo = () => {

  const navigation = useNavigate()
  function HandleClick () {
    const movieName = document.querySelector('.searchbar').value;
    console.log(movieName);
    navigation(`/Search/${movieName}`,{
      state:{
        movieName
      }
    })
  }
  function handleInputChange(e){
    e.preventDefault(); // Prevents the default form submission behavior
    
  }

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      // Perform the action you want when Enter is pressed
      console.log('Enter key pressed. Performing action...');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center text-center mx-auto max-w-[800px] '>
        <span className='text-[90px] font-bold mt-40'>Embrace.</span>
        <span className='text-[24px] font-semibold mt-0'>Uncover the magic of film: Explore, Watch and Delight in Movies</span>

        <div className='flex items-center w-full rounded-3xl mt-3'>
            <input className=' searchbar w-[90%] text-black py-[20px] h-[60px] text-[20px] rounded-l-3xl focus:outline-none pl-8'  type='text' placeholder='Search for a movie or tv show...' onChange={handleInputChange} onKeyPress={handleEnterKey}></input>
            <button className='w-[150px] h-[60px] text-[20px] bg-gradient-to-r from-yellow-500 via-red-500 to-red-800 rounded-r-3xl' onClick={HandleClick}>Search</button>
        </div>
    </div>
  )
}

export default Introinfo