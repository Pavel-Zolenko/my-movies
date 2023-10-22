import {
  MovieImg,
  MovieInfo,
  MovieName,
  MovieDescr,
} from 'components/MovieCard/MovieCard.styled';
import PropTypes from 'prop-types';
import imageplaceholder from 'images/noposter.jpg';

export const MovieCard = ({ movie }) => {
  let movieYear = '';
  if (movie.release_date ?? movie.first_air_date) {
    movieYear = (movie.release_date ?? movie.first_air_date).slice(0, 4);
  }

  return (
    <>
      <MovieImg
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : imageplaceholder
        }
        alt={movie.original_title ?? movie.name}
        loading="lazy"
      />
      <MovieInfo>
        <MovieName>{movie.title ?? movie.name}</MovieName>
        <MovieDescr>{movieYear}</MovieDescr>
      </MovieInfo>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
