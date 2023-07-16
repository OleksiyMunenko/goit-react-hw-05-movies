import { Link, useLocation } from 'react-router-dom';

function SearchList({ searchMovie }) {
  const location = useLocation();
  console.log(searchMovie);
  return (
    <ul>
      {searchMovie > 0 &&
        searchMovie.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`} state={{ from: location }}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : 'https://via.placeholder.com/500x400'
                  }
                  alt={movie.title}
                  height={'446px'}
                />
                <p>{movie.title}</p>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export default SearchList;