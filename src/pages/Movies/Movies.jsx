import { useState, useEffect } from 'react';
import { useSearchParams} from "react-router-dom";
import { fetchMovies } from "services/api";
import { ToastContainer, toast } from 'react-toastify';
import { MovieCard } from "components/MovieCard/MovieCard";
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';

export default function Movies() {
    const [moviesFound, setMoviesFound] = useState([]);
    const [input, setInput] = useState('');
    const [searchQuery, setSearchQuery] = useSearchParams();
    const [showLoader, setShowLoader] = useState(false);
    
    const query = searchQuery.get('search');
        
   
    useEffect(() => {
        if (!query) {
            return;
        }
        setShowLoader(true);
        fetchMovies(query).then(data => {
            setMoviesFound([...data.results])
        })
            .catch(error => console.log(error))
        .finally(setShowLoader(false))
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
            
            {showLoader && <Loader />}
            
            <MovieCard movie={moviesFound} />
             
            <ToastContainer />
        </>
    )
}