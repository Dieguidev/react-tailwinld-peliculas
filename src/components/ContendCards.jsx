import { useEffect, useState } from 'react'
import { getData } from '../data/httpClient';
import { MovieCard } from './MovieCard';




export const ContendCards = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData('/discover/movie').then((data) => {
      setMovies(data.results);
    });
  }, [])


  return (
    <ul className='grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-10 p-[40px] justify-center max-[560px]:grid-cols-[100%] items-center'>
      {
        movies.map(movie =>(
          <MovieCard key={movie.id} movie={movie} />))
      }
    </ul>
  )
}
