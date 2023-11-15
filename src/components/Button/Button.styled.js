import styled from '@emotion/styled';

export const Btn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${p => p.theme.colors.textTitle};

  :hover {
    color: #df4d4d;
  }
`;
