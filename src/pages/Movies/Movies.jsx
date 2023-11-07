import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { InputAdornment, ThemeProvider, IconButton } from '@mui/material';
import { t } from 'i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

import { fetchMovies } from 'services/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import {
  BcgMovies,
  PageWrap,
  List,
  Item,
  StyledLink,
  CustomTextField,
  SearchTheme,
} from './Movies.styled';
import Loader from 'components/Loader/Loader';

export default function Movies() {
  const [moviesFound, setMoviesFound] = useState([]);
  const [input, setInput] = useState('');
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [showLoader, setShowLoader] = useState(false);

  const location = useLocation();
  const lang = t('lang');

  const query = searchQuery.get('search');

  useEffect(() => {
    if (!query) {
      return;
    }
    setShowLoader(true);
    fetchMovies(query, lang)
      .then(data => {
        setMoviesFound([...data.results]);
      })
      .catch(error => console.log(error))
      .finally(setShowLoader(false));
  }, [query, lang]);

  const onSearchInput = event => {
    setInput(event.target.value);
  };

  const clearAll = () => {
    setInput('');
    setMoviesFound([]);
    setSearchQuery({ search: '' });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!input.trim()) {
      return toast.error('empty query');
    }
    if (input.trim() !== query) {
      setMoviesFound([]);
      setSearchQuery({ search: input.trim() });
    }
  };

  return (
    <ThemeProvider theme={SearchTheme}>
      <PageWrap>
        <form onSubmit={handleSubmit}>
          <CustomTextField
            id="standard-basic"
            label="Search"
            variant="filled"
            value={input}
            onChange={onSearchInput}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {input.length > 0 && (
                    <div style={{ cursor: 'pointer' }}>
                      <AiOutlineClose
                        color="white"
                        size={24}
                        onClick={clearAll}
                      />
                    </div>
                  )}

                  <IconButton
                    type="submit"
                    sx={{ p: '10px 20px' }}
                    aria-label="search"
                  >
                    <BsSearch color="white" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>

        {showLoader && <Loader />}
        {!moviesFound.length && <BcgMovies color="white" />}

        <List>
          {moviesFound.map(trend => (
            <Item key={trend.id}>
              <StyledLink to={`/movies/${trend.id}`} state={{ from: location }}>
                <MovieCard movie={trend} />
              </StyledLink>
            </Item>
          ))}
        </List>
        <ToastContainer />
      </PageWrap>
    </ThemeProvider>
  );
}
