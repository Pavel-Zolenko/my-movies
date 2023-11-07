import { useState, useEffect, useCallback, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'services/i18n';
import { useTranslation } from 'react-i18next';

import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetalis'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Trailer = lazy(() => import('components/Trailer/Trailer'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  const [currentLang, setCurrentLang] = useState('uk-UA');

  const { i18n } = useTranslation();

  const changeLanguage = useCallback(
    language => {
      i18n.changeLanguage(language);
    },
    [i18n]
  );

  const turnUaLang = () => {
    setCurrentLang('uk-UA');
  };

  const turnEnLang = () => {
    setCurrentLang('en-US');
  };

  useEffect(() => {
    changeLanguage(currentLang.slice(0, 2));
  }, [currentLang, changeLanguage]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <SharedLayout turnUaLang={turnUaLang} turnEnLang={turnEnLang} />
        }
      >
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="trailer" element={<Trailer />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
