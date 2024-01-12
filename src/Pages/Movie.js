import React from 'react'
import {useEffect,useState} from 'react'
import {useLocation} from 'react-router-dom'
import Api from '../MovieApi'
import CircularProg from '../components/CircularProg';
// import MovieCastApi from '../MovieCastApi';
import MovieCast from '../components/moviecards/MovieCast';
import Video from '../components/moviecards/Video';




const Movie = () => {

  const[Movie, SetMovie] = useState(null);
  const[videos , SetVideo] = useState(false);
  const[Cast, SetCast] = useState(null);
  const{state} = useLocation();
  useEffect(() => {
    async function fetchCast() {

      let response = await Api(state.id, state.type, 'credits');
  
      SetCast({...response});
    }
    fetchCast();

    async function fetchMovie() {

      let response = await Api(state.id, state.type);
  
      SetMovie({...response});
    }
    fetchMovie();

    async function fetchVideos() {

      let response = await Api(state.id, state.type, 'videos');
  
      SetVideo({...response});
    }
    fetchVideos();

},[] );
// console.log(videos);

  useEffect(() =>{
    window.scroll(0, 0);
  })
const [isOpen, setOpen] = useState(false);

  return (
    <div className='min-h-[1200px] h-fit max-w-[1200px]  mx-auto mt-16 text-white bg-black py-12'>
      {/* {Movie && Movie.original_title} */}
      <div className='flex w-full'>
        <div className='w-[50%] min-w-[350px] min-h-[500px]'>
        <img className='w-full rounded-2xl object-cover object-center' 
        src={(Movie?.poster_path)?`https://image.tmdb.org/t/p/w500/${Movie?.poster_path}`:('/assets/no-poster.png')}/>
        </div>
        <div className=" flex flex-col justify-start items-start py-8 pl-12 space-y-4">
          <div>
            <h1 className='text-[34px] leading-10 '>{Movie?.original_title ||Movie?.name}</h1>
            <p className=' text-[20px] opacity-50 '>{Movie?.tagline}</p>
          </div>
          <div className='flex flex-col gap-1'>
          <div className='flex gap-1'>
          
          {
            Movie?.genres.map((genre) =>{
              return <span className=' bg-pink-600 px-1  text-[12px] w-fit rounded-sm ' key={genre.id}>{genre.name}</span>
            })
          }
          </div>
          {/* <CircularProg value = {Movie?.vote_average} color = 'success'/> */}
          <div className='flex space-x-20 mt-2'>
            <div className='  w-14 h-14'>
            <CircularProg percentage={Movie?.vote_average}/> </div>

            <button className="btn-primary text-[25px] " onClick={() =>{window.scrollY(50)}}>
            Watch trailer
            </button>
          </div>
          
          <div>
          <h2 className='text-[30px] mb-2'>Overview</h2>
          <p>
            {Movie?.overview}  
          </p>
          </div>

          <div className='gap-5 flex font-semibold mt-2'>
            <span>Status: <span className='opacity-50'>{Movie?.status  }</span> </span>
            <span>Release Date: <span className='opacity-50'>{Movie?.release_date || Movie?.first_air_date}</span> </span>
            <span>Runtime: <span className='opacity-50'> {Movie?.runtime}mins</span></span>

          </div>
          {/* <hr/>
          <div className='gap-1 flex'>
            <span>Director: {Movie?.status}</span>

          </div>
          <hr/>
          <div className='gap-1 flex'>
            <span>Director: {Movie?.status}</span>

          </div> */}

          </div>
        </div>
      </div>

      <div>
        <h2 className='text-[28px] text-white mb-[25px] mt-[30px] font-semibold'>Top Cast</h2>
        {/* <MovieCast/> */}
        <div className='flex overflow-auto gap-x-7'>
        {
          Cast?.cast.map((member)=>(
            <MovieCast member ={member} key ={member.id}/>
          ))
        }
        </div>
      </div>

      <div>
        <h2 className='text-[28px] text-white mb-[25px] mt-[30px] font-semibold'>Related videos</h2>
        {/* <MovieCast/> */}
        <div className='flex overflow-auto gap-x-7'>
        {
          videos?.results?.map((video)=>(
            <Video video ={video} key ={video.id}/>
          ))
        }
        </div>
      </div>

    </div>
  )
}

export default Movie