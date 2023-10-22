import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
`;

export const Item = styled.li`
  width: 120px;
  box-shadow: 0 0 8px rgba(200, 200, 200, 0.8);
`;

export const Name = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
`;

export const Character = styled.p`
  font-size: 14px;
`;
