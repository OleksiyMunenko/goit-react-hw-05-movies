import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = '?api_key=2b2db797fd1929aecfb2dafa112cdb54';

export async function fetchTrending() {
  const trending = await axios.get(`${BASE_URL}/trending/movie/day${API_KEY}`);

  if (trending.status === 200) {
    return trending.data.results;
  }
}

export async function getMovieById(movieId) {
  const movie = await axios.get(
    `${BASE_URL}/movie/${movieId}${API_KEY}&language=en-US`
  );
  if (movie.status === 200) {
    return movie;
  }
}

export async function getCastMovie(movieId) {
  const cast = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits${API_KEY}&language=en-US`
  );
  if (cast.status === 200) {
    return cast;
  }
}

export async function getReviewMovie(movieId) {
  const review = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews${API_KEY}&language=en-US`
  );
  if (review.status === 200) {
    return review;
  }
}

export async function getSearchMovie(query) {
  const search = await axios.get(
    `${BASE_URL}/search/movie${API_KEY}&query=${query}`
  );
  if (search.status === 200) {
    return search;
  }
}