import React, { useState, useEffect } from 'react';
import Introsection from '../components/introSection/Introsection';
import Cards from '../components/moviecards/Cards';
import Api from '../Api';



const Home = () => {
  
  const [Data, setData] = useState(null);
  
  useEffect(() => {
    async function fetchBackgroundImg() {

      let response = await Api();
  
      setData({...response});
    }
    fetchBackgroundImg();

  },[] );
  // console.log(Data);
  return (
    <div>
      <Introsection Data = {Data}/>
      <Cards category={'now_playing'}/>
      <Cards category={'upcoming'}/>
      <Cards category={'popular'}/>
      <Cards category={'top_rated'}/>
      
    </div>
  );

}

export default Home