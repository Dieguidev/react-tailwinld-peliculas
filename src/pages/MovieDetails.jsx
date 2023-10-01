
import { useEffect, useState } from 'react';


import { useParams } from 'react-router-dom'
import { getData } from '../data/httpClient';
import { getMovieImg } from '../utils/getMovieImg';

export const MovieDetails = () => {

  let { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getData(`/movie/${movieId}`).then((data) => {
      setMovie(data);
    });
  }, [movieId])

  console.log(movie);

  const imageUrl = getMovieImg(movie.poster_path, 500)



    return (
    <div className='flex justify-center flex-wrap mt-10'>

      <figure className='max-w-[400px] m-[15px] h-auto w-4/5'>
        <img
          src={imageUrl}
          alt={movie.title}
        className='rounded-3xl'
        />
      </figure>
      <div className='text-2xl max-w-[400px] m-[15px] h-auto w-4/5'>
        <p className='text-center text-5xl text-[#9F91FE] font-bold m-2'><strong>Title:</strong> {movie.title}</p>
        <p><strong>Gender:</strong> {movie.genres?.[0].name}</p>
        <p><strong>Release date:</strong> {movie.release_date}</p>
        <p className='text-left'><strong>Overview:</strong> {movie.overview}</p>
      </div>
    </div>
  )
}

MovieDetails.propTypes = {}


