import styled from "@emotion/styled/macro";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  list-style: none;
`;

export const Item = styled.li`
  box-shadow: none;
  cursor: pointer;
  transition: box-shadow 250ms linear;
  border-radius: 5px;
  overflow: hidden;

  width: calc((100% - 6 * 16px) / 7);

  :hover,
  :focus {
    box-shadow: 0 0 8px rgba(200, 200, 200, 0.8);
  }

`;

export const MovieThumb = styled.div`
   border-radius: 5px;
   overflow: hidden;
   width: 200px;
   height: 300px;

`

export const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms linear;
  cursor: pointer;

  &:hover,
   :focus {
    transform: scale(1.05);
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.6);
  }

`
export const MovieInfo = styled.div`
  padding-top: 12px;  
`
export const MovieName = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500; 
  color: black;
`

export const MovieDescr = styled.div`
  color: #ff6b08;
  font-size: 20px;
  font-weight: 500;

`
  


