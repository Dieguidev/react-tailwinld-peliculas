import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export const MovieCard = ({ movie }) => {

  const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;

  return (
    <li>
      <Link
        to={`/movie/${movie.id}`}
        className='text-center text-2xl flex items-center justify-center flex-col gap-4'
      >
        <figure className='w-[230px] h-[345px] flex items-center transition ease-in-out delay-150 hover:translate-y-[-30px] hover:opacity-50 max-[560px]:w-11/12 max-[560px]:h-auto'>

          <img
            className='w-full h-full object-cover rounded-lg'
            src={imageUrl} alt={movie.title}
          />
        </figure>
        <p className='h-14'>{movie.title}</p>
      </Link>

    </li>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

