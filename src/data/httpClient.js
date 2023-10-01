const API = 'https://api.themoviedb.org/';

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTVhZWVlZTBkZWYyNzI0ZWVhMThlNjA3NmZlOGJiZSIsInN1YiI6IjY1MTgyZDNlYzUwYWQyMDBhZDgwNGQ2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5nAxyvD_OObwjR7r6Dz73ioVZE3i73c_KTz6tGtxVMo',
    },
  }).then((response) => response.json());
}
