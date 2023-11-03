import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { fetchTrends } from 'services/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import {
  StyledLink,
  PageWrap,
  PageTitle,
  List,
  Item,
  PaginationTheme,
} from './Home.styled';

import {
  Container,
  Pagination,
  PaginationItem,
  Stack,
  ThemeProvider,
} from '@mui/material';

export default function Home() {
  const [trends, setTrends] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const [page, setPage] = useState(parseInt(query.get('page') || '1', 10));

  useEffect(() => {
    fetchTrends(page)
      .then(data => {
        setTrends(data.results);
        setTotalPages(data.total_pages);
      })
      .catch(error => console.log(error));
  }, [page]);

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

      <Container maxWidth="md">
        <Stack spacing={2} alignItems="center">
          {!!page && (
            <ThemeProvider theme={PaginationTheme}>
              <Pagination
                color="primary"
                shape="rounded"
                size="large"
                count={totalPages}
                page={page}
                onChange={(_, num) => setPage(num)}
                showFirstButton
                showLastButton
                renderItem={item => (
                  <PaginationItem
                    component={Link}
                    to={`/?page=${item.page}`}
                    {...item}
                  />
                )}
              />
            </ThemeProvider>
          )}
        </Stack>
      </Container>
    </PageWrap>
  );
}
