import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { fetchMovieById } from 'services/api';
import { ImStarHalf } from 'react-icons/im';
import imageplaceholder from 'images/noposter.jpg';
import { formatRuntimeEn } from 'services/formatRuntime';
import {
  PageContainer,
  DetailsWrapp,
  DetailsBox,
  ButtonContainer,
  DetailsText,
  DetailsTitle,
  DetailsImg,
  WrapText,
  StyledLink,
  BackDrop,
  Wrap,
} from './MovieDetails.styled';
import { BackLink } from 'components/BackLink/BackLink';
import Loader from 'components/Loader/Loader';

export default function MovieDetails() {
  const [movieItem, setMovieItem] = useState(null);
  const params = useParams();
  const { t } = useTranslation();
  const lang = t('lang');

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    fetchMovieById(params.id, lang)
      .then(data => {
        setMovieItem(data);
      })
      .catch(error => console.log(error));
  }, [params.id, lang]);

  return (
    <PageContainer>
      <BackLink to={backLinkHref}>{t('buttons.back')}</BackLink>
      {movieItem && (
        <DetailsWrapp>
          <BackDrop backdrop={movieItem?.backdrop_path}>
            <DetailsTitle>{movieItem.title || movieItem.name}</DetailsTitle>
            <Wrap>
              <DetailsImg
                width="200"
                src={
                  movieItem.poster_path
                    ? `https://image.tmdb.org/t/p/w200/${movieItem.poster_path}`
                    : imageplaceholder
                }
                alt={`${movieItem.title || movieItem.name}`}
              />
              <DetailsBox>
                <DetailsText>
                  {(movieItem.release_date ?? movieItem.first_air_date).slice(
                    0,
                    4
                  )}
                </DetailsText>
                <DetailsText>
                  {movieItem.genres.map(genre => genre.name).join(', ')}
                </DetailsText>
                <DetailsText>{formatRuntimeEn(movieItem.runtime)}</DetailsText>
                <DetailsText>
                  {movieItem.vote_average > 0 && (
                    <WrapText>
                      <ImStarHalf />
                      {movieItem.vote_average.toFixed(1)}
                      /10
                    </WrapText>
                  )}
                </DetailsText>

                <ButtonContainer>
                  <StyledLink to="cast" state={{ from: backLinkHref }}>
                    {t('buttons.cast')}
                  </StyledLink>
                  <StyledLink to="reviews" state={{ from: backLinkHref }}>
                    {t('buttons.reviews')}
                  </StyledLink>
                  <StyledLink to="trailer" state={{ from: backLinkHref }}>
                    {t('buttons.trailer')}
                  </StyledLink>
                </ButtonContainer>
              </DetailsBox>
            </Wrap>
          </BackDrop>

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </DetailsWrapp>
      )}
    </PageContainer>
  );
}
