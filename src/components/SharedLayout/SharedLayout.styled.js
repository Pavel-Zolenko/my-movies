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
  padding: 10px;
  border-bottom: 1px solid grey;
  background-color: ${colors.bcgHeader};
`;

export const Link = styled(NavLink)`
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;

  &.active {
    color: #df4d4d;
  }
  :hover {
    color: #df4d4d;
    border-bottom: 2px solid #df4d4d;
  }
`;
export const LangBtnWrap = styled.div``;

export const LangBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.textTitle};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  :disabled {
    color: ${colors.red};
  }
  :hover:not(:disabled) {
    color: ${colors.red};
  }
`;
