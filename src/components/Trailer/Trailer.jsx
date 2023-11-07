import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { t } from 'i18next';
import { fetchMovieTrailer } from 'services/api';
import { IframeStyled } from './Trailer.styled';

export default function Trailer() {
  const [trailer, setTrailer] = useState('plugtext');

  const { id } = useParams();
  const lang = t('lang');

  useEffect(() => {
    fetchMovieTrailer(id, lang).then(data => {
      const objTrailer = data.results.find(el => el.type === 'Trailer');

      if (!objTrailer) {
        setTrailer('');
        return;
      }
      setTrailer(`https://www.youtube.com/embed/${objTrailer.key}`);
    });
  }, [id, trailer, lang]);

  return (
    <>{!trailer ? <p>not found trailer</p> : <IframeStyled url={trailer} />}</>
  );
}
