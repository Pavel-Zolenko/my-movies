import { useState, useEffect } from "react";
import { NavLink} from 'react-router-dom';
import { fetchTrends } from "services/api";
// import { MovieCard } from "components/MovieCard/MovieCard";


export default function Home() {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        fetchTrends(1).then(data => {
            setTrends(data.results)
            
        })
    }, [])
   
    return (
        <>
            <ul>
                {trends.map(trend => (
                    <li key={trend.id}>
                        <NavLink to={`movies/${trend.id}`}>
                            <p>{trend.title || trend.name}</p>
                            {/* <MovieCard movie={trend} /> */}
                         </NavLink>
                        
                   </li>
               ))}
            </ul>
        </>
    )
}
