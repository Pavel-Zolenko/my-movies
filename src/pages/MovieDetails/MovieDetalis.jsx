import { Suspense } from "react";
import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { fetchMovieById } from "services/api";
import imageplaceholder from "images/noposter.jpg";
import { DetailsWrapp, DetailsWrappInfo } from "./MovieDetails.styled";
import { BackLink } from "components/BackLink/BackLink";
import Loader from 'components/Loader/Loader';


export default function MovieDetails() {
  const [movieItem, setMovieItem] = useState(null);
  const params = useParams();
  
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";
 
  
  useEffect(() => {
    fetchMovieById(params.id).then(data => {
      setMovieItem(data)
    })
      .catch(error => console.log(error));
  }, [params.id]);
    
  
  return (
    
    <div>
      <BackLink  to={backLinkHref}>Back to movies</BackLink>
      {movieItem && (
        <>
        <DetailsWrapp>
        <div>
          <img width="200"
            src={
              movieItem.poster_path
                ? `https://image.tmdb.org/t/p/w200/${movieItem.poster_path}`
                : imageplaceholder
            }
            alt={`${movieItem.title || movieItem.name}`} />
        </div>
        <div>
          <h1>{movieItem.title || movieItem.name }</h1>
          <p>User score:{  Math.round((movieItem.vote_average)*10)}%</p>
        <h2>Overview</h2>
          <p>{movieItem.overview }</p>
        <h3>Genres</h3>
        <p>{movieItem.genres.map(genre => genre.name).join(', ')}</p>  
        </div>
        </DetailsWrapp>
          <DetailsWrappInfo>
            <p>Additional information</p>
            <ul>
        <li>
          <Link to="cast" state={{ from: backLinkHref }}>Cast</Link>
        </li>
        <li>
          <Link to="Reviews" state={{ from: backLinkHref }}>Reviews</Link>
        </li>
            </ul>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
      
          </DetailsWrappInfo>
          </>
      )}
      </div>
      
   
        

  );
}
