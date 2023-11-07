import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { TextField, createTheme } from '@mui/material';
import { Container } from '../../components/Container/Container.jsx';
import { darkTheme } from '../../services/theme';
import bcgMovies from 'images/bcg-movies.jpg';

const { colors } = darkTheme;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

export const BcgMovies = styled.div`
  width: 100%;
  height: 100vh;

  background-image: radial-gradient(
      at center,
      rgba(59, 67, 81, 0.2),
      ${colors.bcgMain} 70%
    ),
    url(${bcgMovies});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const PageWrap = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  height: 100vh;
  background-color: ${colors.bcgMain};
`;

export const PageTitle = styled.h2`
  text-align: center;
  color: ${colors.textPrimary};
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  list-style: none;
`;

export const Item = styled.li`
  max-width: 200px;
  background-color: white;
  border-radius: 0px 0px 6px 6px;
  transition: box-shadow 250ms linear, transform 250ms linear;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  :hover,
  :focus {
    box-shadow: 0 0 8px rgba(200, 200, 200, 0.8);
    transform: scale(1.05);
  }
`;

export const CustomTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    fontSize: 20,
    height: 26,
    color: 'white',
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#121212',
  },
});

export const SearchTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
});
