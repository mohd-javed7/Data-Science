import React,{useState,useEffect} from 'react'
import axios from "axios"

const Trending = () => {
    const [movies, setmovies] = useState([])
    const [mindex, setmindex] = useState(0)
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    useEffect(()=>{
        const fetchMovies = async () =>{
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1
`)
                 setmovies(res.data.results)
            }catch(err){
                console.log(err)
            }
        }
        fetchMovies()
    },[])

    useEffect(() => {
      if (movies.length === 0) return; 
    
      const interval = setInterval(() => {
        setmindex((prev) => (prev + 1) % movies.length); 
      }, 5000); // every 15s
    
      return () => clearInterval(interval); 
    }, [movies]);

  return (

    <>
  {movies.length > 0 && (
    <div
      className=" relative w-full h-[80vh]"
    >
    <div
    className="absolute inset-0 bg-cover bg-center filter blur-md transition-opacity duration-1000 ease-in-out animate-fadeIn"
    style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movies[mindex].backdrop_path})`
    }}
  ></div>
  <div className="absolute inset-0 flex justify-between items-center z-10">
  <button className="text-white text-2xl cursor-pointer" onClick={()=> mindex===0?setmindex(movies.length - 1):setmindex(mindex-1)} >&lt;</button>
  <button className="text-white text-2xl cursor-pointer"onClick={()=> mindex===movies.length-1?setmindex(0):setmindex(mindex+1)}>&gt;</button>
</div>
        <div className='relative flex items-center h-full px-16'>
        <img src={`https://image.tmdb.org/t/p/w780${movies[mindex].poster_path}`} alt={movies[mindex].title} className=' w-56 shadow-lg transition-transform duration-1000 ease-in-out animate-fadeIn' />
            <div className="ml-10 max-w-xl text-white">
            <h1 className="text-4xl font-bold">{movies[mindex].title}</h1>
            <p className="mt-4 text-lg text-gray-200">{movies[mindex].overview}</p>
            </div>
        </div>
    </div>

  )}
</>


  )
}

export default Trending
