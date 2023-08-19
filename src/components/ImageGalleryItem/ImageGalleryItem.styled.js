import { styled } from 'styled-components';

export const LikeThumb = styled.div`
  position: absolute;
  display: flex;
  left: 8px;
  bottom: 8px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 13px;
  width: 88px;
  height: 40px;
  padding: 8px;
  align-items: center;
  justify-content: space-around;

  font-size: 18px;
  font-weight: 700;

  svg {
    width: 22px;
    height: 22px;
  }
`;
