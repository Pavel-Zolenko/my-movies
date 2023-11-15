import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { fetchTrends } from 'services/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { StyledLink, PageWrap, PageTitle, List, Item } from './Home.styled';
import { PaginationMaterail } from 'components/PaginationMaterail/PaginationMaterail';

export default function Home() {
  const [trends, setTrends] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = Number(searchParams.get('page') ?? 1);
  const [page, setPage] = useState(query);

  const location = useLocation();

  const { t } = useTranslation();
  const lang = t('lang');

  const changePage = (_, num) => {
    setPage(num);
    setSearchParams({ page: num });
  };

  useEffect(() => {
    document.title = 'My Movies';

    fetchTrends(page, lang)
      .then(data => {
        setTrends(data.results);
        setTotalPages(data.total_pages);
      })
      .catch(error => console.log(error));
  }, [page, lang, setSearchParams]);

  return (
    <PageWrap>
      <PageTitle>{t('title.trending')}</PageTitle>
      <List>
        {trends.map(trend => (
          <Item key={trend.id}>
            <StyledLink to={`/movies/${trend.id}`} state={{ from: location }}>
              <MovieCard movie={trend} />
            </StyledLink>
          </Item>
        ))}
      </List>
      {
        <PaginationMaterail
          page={page}
          totalPages={totalPages}
          changePage={changePage}
        />
      }
    </PageWrap>
  );
}
