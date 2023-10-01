
export function getData(path) {
  const API = 'https://api.themoviedb.org/3';

  return fetch(`${API}${path}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTVhZWVlZTBkZWYyNzI0ZWVhMThlNjA3NmZlOGJiZSIsInN1YiI6IjY1MTgyZDNlYzUwYWQyMDBhZDgwNGQ2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5nAxyvD_OObwjR7r6Dz73ioVZE3i73c_KTz6tGtxVMo',
      'Content-Type': 'application/json;charset=utf-8',
    },
  }).then((response) => response.json());
}
