import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import { fetchMovies } from 'services/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { PageWrap, List, Item, StyledLink } from './Movies.styled';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';

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
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <input type="text" name="search" onChange={onSearchInput} />
        </label>
        <button type="submit">Search</button>
      </form>

      {showLoader && <Loader />}

      <PageWrap>
        <List>
          {moviesFound.map(trend => (
            <Item key={trend.id}>
              <StyledLink to={`/movies/${trend.id}`} state={{ from: location }}>
                <MovieCard movie={trend} />
              </StyledLink>
            </Item>
          ))}
        </List>
      </PageWrap>

      <ToastContainer />
    </>
  );
}
