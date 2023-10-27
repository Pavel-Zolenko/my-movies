import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { fetchMovies } from 'services/api';
import 'react-toastify/dist/ReactToastify.css';
import { MovieCard } from 'components/MovieCard/MovieCard';
import {
  BcgMovies,
  PageWrap,
  List,
  Item,
  StyledLink,
  CustomTextField,
  CustomButton,
} from './Movies.styled';
import Loader from 'components/Loader/Loader';
import IconButton from '@mui/material/IconButton';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

import { InputAdornment } from '@mui/material';

export default function Movies() {
  const [moviesFound, setMoviesFound] = useState([]);
  const [input, setInput] = useState('');
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [showLoader, setShowLoader] = useState(false);

  const location = useLocation();

  const query = searchQuery.get('search');

  useEffect(() => {
    if (!query) {
      return;
    }
    setShowLoader(true);
    fetchMovies(query)
      .then(data => {
        setMoviesFound([...data.results]);
      })
      .catch(error => console.log(error))
      .finally(setShowLoader(false));
  }, [query]);

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
      return toast.error('emptyQuery');
    }
    if (input.trim() !== query) {
      setMoviesFound([]);
      setSearchQuery({ search: input.trim() });
    }
  };

  return (
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
                  <AiOutlineClose color="white" size={24} onClick={clearAll} />
                )}
                <CustomButton variant="contained" type="submit">
                  <IconButton
                    type="button"
                    sx={{ p: '10px 20px' }}
                    aria-label="search"
                  >
                    <BsSearch color="white" />
                  </IconButton>
                </CustomButton>
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
  );
}
