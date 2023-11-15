import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Container } from 'components/Container/Container';
import { darkTheme } from 'services/theme';

const { colors, shadows } = darkTheme;

export const PageContainer = styled(Container)`
  min-height: 100vh;
  background-color: ${p => p.theme.colors.bcgMain};
`;

export const BackDrop = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 18px;
  padding: 14px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  background-image: linear-gradient(
      to bottom,
      rgba(59, 67, 81, 0.8),
      ${p => p.theme.colors.bcgMain} 80%
    ),
    url(${p => `https://image.tmdb.org/t/p/w1280${p.backdrop}`});

  @media (min-width: 480px) {
    flex-direction: row;
  }
`;

export const Wrap = styled.div`
  @media (min-width: 480px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 14px;
  }
`;

export const DetailsWrapp = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 18px;
`;

export const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;

  @media (min-width: 480px) {
    align-items: flex-start;
  }
`;

export const DetailsText = styled.p`
  text-align: center;
  color: ${p => p.theme.colors.textTitle};
`;
export const DetailsTitle = styled.h1`
  text-align: center;
  font-size: 28px;
  color: #fff;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  @media (min-width: 480px) {
    justify-content: flex-start;
  }
`;

export const DetailsImg = styled.img`
  @media (max-width: 479.8px) {
    margin: 0 auto;
  }
  @media (max-width: 480px) {
    text-align: left;
  }
`;
export const WrapText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const StyledLink = styled(Link)`
  border-radius: 4px;
  color: white;
  background-color: grey;
  padding: 8px;
  text-decoration: none;
  transition: box-shadow 200ms ease-in;

  :hover {
    box-shadow: ${shadows.blackShadow};
  }
`;
