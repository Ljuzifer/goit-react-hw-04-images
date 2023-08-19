import styled from 'styled-components';

export const LoadMore = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  background-color: whitesmoke;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  color: black;
  border: 2px solid black;
  text-decoration: underline;
  cursor: pointer;
  font-family: inherit;
  font-size: 28px;
  line-height: 24px;
  font-style: normal;
  font-weight: 600;
  width: 200px;
  margin: auto;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    color: whitesmoke;
    background-color: black;
  }
`;
