import React from 'react'
import { useNavigate } from 'react-router-dom';


const SearchCard = ({movie}) => {

  const Navigate = useNavigate();

  function clickhandler() {
    Navigate(`/Movie/${movie.id}`,{
      state: {id:movie.id,type: movie.media_type ||'movie'}
    })
  }

  return (
    <div className='hover:-translate-y-2 tansition-1 min-w-[230px] min-h-[402px] rounded-2xl flex flex-col justify-between relative cursor-pointer' onClick={clickhandler}>
        <img className='w-full rounded-2xl' 
        src={(movie.poster_path) ?`https://image.tmdb.org/t/p/w500/${movie.poster_path}`:"/assets/no-poster.png"}/>
        <div className=' text-[20px] font-bold rounded-full w-12 h-12 bg-white flex items-center justify-center absolute ml-2 mt-[300px] text-black'>
        {Math.round(movie.vote_average*10)/10}</div>
        <p className='text-white text-ellipsis mt-3 text-[20px] '>
          {((movie.title) || (movie.name).length > 20) ? (movie.title || movie.name).substring(0,20)+"..." : (movie.title || movie.name)}</p>
        <p className='text-white opacity-50 text-[14px]'>{movie.release_date || movie.first_air_date}</p>
    </div>
  )
}

export default SearchCard