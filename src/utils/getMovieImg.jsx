

export const getMovieImg = (path, width) => {
  return path? `https://image.tmdb.org/t/p/w${width}${path}` : 'https://via.placeholder.com/300x450';

}

// const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
