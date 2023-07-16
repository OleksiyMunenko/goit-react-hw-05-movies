import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from '../services/moviesApi';
import { Wrapp, ListMovie, Title } from './Movies.styled';

const Movies = () => {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieTitle = (searchParams.get('query') ?? '').trim();
  const location = useLocation();

  useEffect(() => {
    setInput(movieTitle);
    if (movieTitle === '') return;
    getSearchMovie(movieTitle).then(data => setMovies(data.data.results));
  }, [movieTitle, searchParams]);

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() !== '') {
      setSearchParams({ query: input.trim() });
    }

    e.target.reset();
  }

  return (
    <Wrapp>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit">search</button>
      </form>

      {movies.length > 0 && (
        <ListMovie>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                      : 'https://via.placeholder.com/300x450'
                  }
                  alt={movie.title}
                  height={400}
                />
              </Link>
              <Title>{movie.title}</Title>
            </li>
          ))}
          ;
        </ListMovie>
      )}
    </Wrapp>
  );
};

export default Movies;