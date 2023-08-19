import 'modern-normalize';
import { styled, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: lightgray;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
  height: 100%;
  
}

.dna-wrapper{
  margin: auto;
  /* background-color: black; */
}
`;

export const Thumb = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const BigImage = styled.img`
  max-width: calc(100vw - 96px);
  max-height: calc(100vh - 48px);
`;

export const CloseModalBtn = styled.button`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 44px;
  height: 44px;
  border: 1px solid black;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  padding: 8px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover,
  &:focus {
    background-color: whitesmoke;
  }
`;
