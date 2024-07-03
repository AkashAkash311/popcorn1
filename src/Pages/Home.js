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

// import React, { useEffect, useState } from 'react'

// const Home = () => {
//   const [Data, setData] = useState([]);
//   const[keyword, setkeyword] = useState("");
//   const [fetchdata, setfetchdata] = useState([]);


//   function onsubmit(){
    
//     let data1 = Data.filter((item)=> item.title.includes(keyword))
//     setfetchdata(data1);
//     console.log(fetchdata);
    
//   }
   
//   async function fetchAPI (){
//     let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let res = await data.json();
//     setData(res);

//     console.log(res);
//   }

//   useEffect(() => {
//     onsubmit();
//   },[keyword]);

//   useEffect(() =>{
//     fetchAPI();
//   },[]);

//   return (
//     <div className=' mt-40 mb-14'>
//       <input placeholder='Enter the value' type='text' onChange={(e)=> setkeyword(e.target.value) } />
//       <button onClick={onsubmit} className=' bg-yellow-500'>searchbar</button>

//     <div>
//       <h1> API Data</h1>
//       {
//           keyword ? (
//             fetchdata.map((item) => (
//               <p key={item.id} className='text-white'>{item.title}</p>
//             ))
//           ) : (
//             Data.map((item) => (
//               <p key={item.id} className='text-white'>{item.title}</p>
//             ))
//           )
//         }
//     </div>
    


//     </div>
//   )
// }

// export default Home