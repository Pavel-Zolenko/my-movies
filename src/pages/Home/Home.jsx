import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrends } from 'services/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { StyledLink, PageWrap, PageTitle, List, Item } from './Home.styled';

export default function Home() {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrends(1)
      .then(data => {
        setTrends(data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <PageWrap>
      <PageTitle>Популярні сьогодні</PageTitle>
      <List>
        {trends.map(trend => (
          <Item key={trend.id}>
            <StyledLink to={`/movies/${trend.id}`} state={{ from: location }}>
              <MovieCard movie={trend} />
            </StyledLink>
          </Item>
        ))}
      </List>
    </PageWrap>
  );
}
