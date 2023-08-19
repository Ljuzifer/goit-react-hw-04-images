import { FcSearch } from 'react-icons/fc';
import styled from 'styled-components';

export const HeaderThumb = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  width: 888px;
  border-radius: 28px;
  margin: auto;
  background-color: #080808ef;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  form {
    display: flex;
    align-items: center;
    width: 100%;
    height: 44px;
    max-width: 600px;
    background-color: #fff;
    border-radius: 22px;
    overflow: hidden;
  }

  button {
    display: block;
    width: 48px;
    height: 48px;
    border: 0;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
  }

  button:hover {
    opacity: 1;
  }

  input {
    display: block;
    width: 100%;
    height: 44px;
    font: inherit;
    font-size: 22px;
    border: none;
    outline: none;
    text-align: center;
    padding-left: 13px;
    padding-right: 13px;
  }

  input::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const IconSearch = styled(FcSearch)`
  width: 100%;
  height: 100%;
`;
