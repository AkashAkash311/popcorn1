// const [image, setImage] = useState('');


export default async function Api(movieName){
    
    const options =  {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTA2NmRhNjhlMDgxMTRlMjRhYTVmOGI2ZmJmYjViZSIsInN1YiI6IjY1OGFlNzA2NWFiYTMyNjg2MmI5MzQyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XpOQOlQIGRrieaFmoH9x7DS7XzMIKRxZtQ2U-wW6lZg`,
      }
  }
  
  

      try{
        let res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${movieName}&include_adult=false&language=en-US&page=1`, options);
        let Data = await res.json();
        return Data;
      }
      catch(error){
        console.error(error);
      }
  
  }