import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'services/api';
import { List } from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchReviewsById(params.id).then(data => {
      setReviews(data.results);
    });
  }, [params.id]);

  return (
    <>
      {!reviews.length ? (
        <p>No informatiom</p>
      ) : (
        <List>
          {reviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </List>
      )}
    </>
  );
}
