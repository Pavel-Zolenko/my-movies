import { useState, useEffect, useCallback, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'services/i18n';
import { useTranslation } from 'react-i18next';

import { ThemeUIProvider } from 'theme-ui';

import { theme } from 'services/themeUi';

import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetalis'));
const Overview = lazy(() => import('components/Overview/Overview'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Trailer = lazy(() => import('components/Trailer/Trailer'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

const startData = {
  lang: 'uk-UA',
  theme: 'darkTheme',
};

const value = localStorage.getItem('filmoteka');
let savedData = JSON.parse(value);

export const App = () => {
  const [data, setData] = useState(savedData ?? startData);
  const [currentLang, setCurrentLang] = useState(data.lang);
  const [currentTheme, setCurrentTheme] = useState(data.theme);

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

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'darkTheme' ? 'lightTheme' : 'darkTheme');
  };

  useEffect(() => {
    changeLanguage(currentLang.slice(0, 2));
    setData({
      lang: currentLang,
      theme: currentTheme,
    });
  }, [currentLang, currentTheme, changeLanguage]);

  useEffect(() => {
    localStorage.setItem('filmoteka', JSON.stringify(data));
  }, [data]);

  return (
    <ThemeUIProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout
              turnUaLang={turnUaLang}
              turnEnLang={turnEnLang}
              toggleTheme={toggleTheme}
              currentTheme={currentTheme}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="overview" element={<Overview />} />
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="trailer" element={<Trailer />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeUIProvider>
  );
};
