import React from 'react'

const MovieCast = ({member}) => {
  // console.log(member);
  return (
    <div className='min-w-[175px] min-h-[250px] flex flex-col justify-center items-center text-white'>
        <img className='w-[175px] h-[175px] object-center rounded-full ' src={(member?.profile_path)?`https://image.tmdb.org/t/p/w500/${member?.profile_path}`:('/assets/no-poster.png')}/>
        <p className='text-[18px] font-semibold'>{member?.name}</p>
        <p className='opacity-50'>{member?.character}</p>
    </div>
  )
}

export default MovieCast