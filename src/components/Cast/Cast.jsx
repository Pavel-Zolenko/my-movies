import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "services/api";
import imageplaceholder from "images/noposter.jpg";

export default function Cast() {
    const [cast, setCast] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetchCastById(params.id).then(data => {
            setCast(data.cast)
        })
    }, [params.id]);
    
    return (
        <>
            <ul>
                 {cast.map(elems => (
                <li key={elems.cast_id}>
                         <img width={120} src={elems.profile_path ?
                             `https://image.tmdb.org/t/p/w200/${elems.profile_path}`: imageplaceholder} alt={elems.name}
                             />
                    <p>{elems.name }</p>
                    <p>Character: {elems.character}</p>
             </li>
         ))}
           </ul>
        </>
    )
}