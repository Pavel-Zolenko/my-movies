import styled from '@emotion/styled';

export const CircularContainer = styled.div`
  position: absolute;
  bottom: -3%;
  right: -6%;
  transition: transform 0.3s;
  :hover,
  :focus {
    transform: scale(1.15);
  }
`;
