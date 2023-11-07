import styled from '@emotion/styled';
import Iframe from 'react-iframe';

export const IframeStyled = styled(Iframe)`
  width: 640px;
  height: 360px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  border: none;

  @media (max-width: 900px) {
    max-width: 100%;
    height: 360px;
  }
`;
