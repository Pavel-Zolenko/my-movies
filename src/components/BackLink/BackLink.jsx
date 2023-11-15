import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: ${p => p.theme.colors.textTitle};
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: #df4d4d;
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
