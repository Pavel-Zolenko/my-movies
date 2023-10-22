import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Container } from '../../components/Container/Container.jsx';
import { darkTheme } from '../../services/theme';

const { colors } = darkTheme;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

export const PageWrap = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
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
