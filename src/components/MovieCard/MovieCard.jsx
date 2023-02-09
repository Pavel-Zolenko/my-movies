import {
  MovieThumb,
  MovieImg,
  MovieInfo,
  MovieName,
  MovieDescr

} from 'components/MovieCard/MovieCard.styled';
import PropTypes from 'prop-types';
import imageplaceholder from 'images/noposter.jpg';
import { List, Item } from "components/MovieCard/MovieCard.styled";
import { StyledLink } from "pages/Movies/Movies.styled";
import {useLocation} from "react-router-dom";


export const MovieCard = ({ movie }) => {
  let movieYear = '';
  const location = useLocation();
  if (movie.release_date ?? movie.first_air_date) {
    movieYear = (movie.release_date ?? movie.first_air_date).slice(0, 4);
     
  }


  return (
    <>
      <List>
        {movie.map(movie => (
          <Item key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }} >
              <MovieThumb>
                <MovieImg src={movie.poster_path
                  ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                  : imageplaceholder}
                  alt={movie.original_title ?? movie.name}
                  loading="lazy"
                />
              </MovieThumb>
              <MovieInfo>
                <MovieName>{movie.title ?? movie.name}</MovieName>
                <MovieDescr>{movieYear}</MovieDescr>
              </MovieInfo>
            </StyledLink>
                        
          </Item>
        ))}
      </List>
    </>
  )
};

MovieCard.propTypes = {
  movie:  PropTypes.object.isRequired,
}
