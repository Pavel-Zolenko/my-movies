import { useState, useEffect } from "react";
import { fetchTrends } from "services/api";
import { MovieCard } from "components/MovieCard/MovieCard";

export default function Home() {
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        fetchTrends(1).then(data => {
            setTrends(data.results)
            
        }).catch(error => console.log(error))
            
    }, [])
   
    return (
        <>
            <MovieCard movie={trends} />
        </>
    )
}
