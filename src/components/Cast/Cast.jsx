import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "services/api";
import imageplaceholder from "images/noposter.jpg";
import Loader from 'components/Loader/Loader';
import { List, Item, Name, Character } from "components/Cast/Cast.styled";

export default function Cast() {
    const [cast, setCast] = useState([]);
    const params = useParams();
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        setShowLoader(true);
        fetchCastById(params.id).then(data => {
            setCast(data.cast)
        }).catch(error => console.log(error))
            .finally(setShowLoader(false))
    }, [params.id]);
    
    return (
        <>
            {showLoader && <Loader/> }
            <List>
                 {cast.map(elems => (
                <Item key={elems.cast_id}>
                         <img width={120} src={elems.profile_path ?
                             `https://image.tmdb.org/t/p/w200/${elems.profile_path}`: imageplaceholder} alt={elems.name}
                             />
                    <Name>{elems.name }</Name>
                    <Character>Character: {elems.character}</Character>
             </Item>
         ))}
           </List>
        </>
    )
}