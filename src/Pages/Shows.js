import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Api from '../Api';
import Card from '../components/moviecards/Card';



const Shows = () => {

    const state = useLocation();
    const [shows,setShows] = useState([]);
    const [genre,setGenre] = useState("Select genre")
    const [sort,setSort] = useState("sort by");
    let page  = 1;

     async function Fetch() {
       console.log(page);
        const res = await Api(state.type,"top_rated",page);
        console.log(res);
        setShows((prev) =>[...prev,...res.results]); 
    };
    
    useEffect(() =>{
        
        Fetch();
        
    },[page])


    useEffect(() =>{
         window.addEventListener("scroll",()=>{
              if(window.scrollY + 312 ===window.innerHeight){
                    page+=1;

              }
         });
         
         return () =>{
              window.removeEventListener('scroll',() =>console.log("yo"));
         }
    })


    console.log(shows);

  return (
    <div className=' max-w-[1200px] mx-auto mt-20   '>\
     
       <div className='flex items-center justify-between'>
                 <h2 className='text-white'>Explore movies</h2>
                 

       </div>
    

    <div className='grid grid-cols-5 gap-7'>
                    {shows && shows.map((movie)=>(
                        < Card key = {movie.id} movie = {movie}/>
                    ))}
    </div>
  
   
  </div>
  )
}

export default Shows
