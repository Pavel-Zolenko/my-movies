import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { darkTheme } from '../../services/theme';

const { colors } = darkTheme;

export const Layout = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;

  ${'' /* min-height: 100vh; */}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid grey;
  background-color: ${colors.bcgHeader};
  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;

  &.active {
    color: #df4d4d;
  }
`;
