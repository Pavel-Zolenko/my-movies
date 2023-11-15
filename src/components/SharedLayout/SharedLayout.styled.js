import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Layout = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px;
  border-bottom: 1px solid grey;
  background-color: ${p => p.theme.colors.bcgHeader};
`;

export const Link = styled(NavLink)`
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.textTitle};
  font-weight: 500;

  &.active {
    color: ${p => p.theme.colors.accent};
  }
  :hover {
    color: ${p => p.theme.colors.accent};
    border-bottom: 2px solid #df4d4d;
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LangBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: 700;
  color: ${p => p.theme.colors.textTitle};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  :disabled {
    color: ${p => p.theme.colors.accent};
  }
  :hover:not(:disabled) {
    color: ${p => p.theme.colors.accent};
  }
`;

export const ThemeBtn = styled.div`
  padding: 1px 6px;
  cursor: pointer;
  color: ${p => p.theme.colors.textTitle};
  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;
