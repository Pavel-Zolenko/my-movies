import img from 'images/error-404.jpg';
import { useEffect } from 'react';
import { t } from 'i18next';
import { Container } from './PageError.styled';

export default function PageError() {
  useEffect(() => {
    document.title = `My Movies | ${t('title.error')}`;
  });

  return (
    <Container>
      <img src={img} alt="error 404" width="100%" />
    </Container>
  );
}
