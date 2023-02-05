import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, NavLink} from "react-router-dom";
import { fetchMovies } from "services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Movies() {
    const [moviesFound, setMoviesFound] = useState([]);
    const [input, setInput] = useState('');
    const [searchQuery, setSearchQuery] = useSearchParams();
    
    const query = searchQuery.get('search');
    const location = useLocation();
    
   
    useEffect(() => {
        if (!query) {
            return;
        }
        fetchMovies(query).then(data => {
            setMoviesFound([...data.results])
        })
        },[query])

    
    const onSearchInput = event => {
        setInput(event.target.value);
    };
   
    const handleSubmit = event => {
        event.preventDefault();
        if (!input.trim()) {
            return  toast.error('emptyQuery');
           
        }
        if (input.trim() !== query) {
        setMoviesFound([]);
        setSearchQuery({ search: input.trim()});
        }
        }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    <input type="text" name='search' onChange={onSearchInput} />
                </label>
                <button type="submit">Search</button>
            </form>

            <ul>
                {moviesFound.map(movie => (
                    <li key={movie.id}>
                        <NavLink to={`${movie.id}`} state={{ from: location }}>
                            <p>{movie.title || movie.name}</p>
                            
                         </NavLink>
                    </li>
                ))}
            </ul>
             <ToastContainer />
        </>
    )
}