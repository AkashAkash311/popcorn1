// export default async function Api(id,type){
    
//     const options =  {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization:
//           `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTA2NmRhNjhlMDgxMTRlMjRhYTVmOGI2ZmJmYjViZSIsInN1YiI6IjY1OGFlNzA2NWFiYTMyNjg2MmI5MzQyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XpOQOlQIGRrieaFmoH9x7DS7XzMIKRxZtQ2U-wW6lZg`,
//       }
//   }
//     //   console.log(id);
//     //   console.log(type);
//       try{
//         let res = await fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US`, options);
//         let Data = await res.json();
//         return Data;
//       }
//       catch(error){
//         console.error(error);
//       }
  
//   }