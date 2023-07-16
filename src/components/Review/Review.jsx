import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewMovie } from 'services/moviesApi';
import { Title } from './Review.styled';

function Review() {
  const [reviewData, setreviewData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (reviewData === null) {
      getReviewMovie(id).then(data => setreviewData(data.data.results));
    }
  }, [id, reviewData]);

  return (
    <>
      {reviewData ? (
        reviewData.map(review => (
          <ul key={review.id}>
            <li>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          </ul>
        ))
      ) : (
        <Title>NO Rewievs</Title>
      )}
    </>
  );
}

export default Review;