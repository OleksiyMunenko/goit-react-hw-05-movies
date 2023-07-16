import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieById } from '../services/moviesApi';
import {
  WrapMovie,
  Content,
  WrappPage,
  Item,
  ListItem,
  Img,
  Btn,
} from './MovieDetail.styled';

function MovieDetail() {
  const [detailMovie, setDetailMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkHref = useRef(location?.state?.from ?? '/');
  const { id } = useParams();

  useEffect(() => {
    if (detailMovie === null) {
      getMovieById(id).then(data => setDetailMovie(data.data));
    }
  }, [detailMovie, id]);

  return (
    <>
      {detailMovie && (
        <WrappPage>
          <Btn
            onClick={() => {
              navigate(backLinkHref.current);
            }}
          >
            Go Back
          </Btn>
          <WrapMovie>
            <Img
              src={
                detailMovie.poster_path
                  ? `https://image.tmdb.org/t/p/original/${detailMovie.poster_path}`
                  : 'https://via.placeholder.com/300x400'
              }
              alt={`${detailMovie.original_title}`}
              width={300}
              height={420}
            ></Img>
            <Content>
              <h2>{detailMovie.original_title}</h2>
              <h3>
                Release date:
                <p>{detailMovie.release_date}</p>
              </h3>
              <h3>
                Overview:
                <p>{detailMovie.overview}</p>
              </h3>
              <h3>
                Popularity:
                <p>{detailMovie.popularity}</p>
              </h3>
            </Content>
          </WrapMovie>
          <div>
            <h2>More information about movie</h2>
            <ListItem>
              <li>
                <Item to="cast">Cast</Item>
              </li>
              <li>
                <Item to="reviews">Reviews</Item>
              </li>
            </ListItem>
            <Outlet />
          </div>
        </WrappPage>
      )}
    </>
  );
}

export default MovieDetail;