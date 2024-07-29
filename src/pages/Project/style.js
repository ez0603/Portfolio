import { css, keyframes } from "@emotion/react";

const bounce = keyframes`
   0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const layout = css`
  width: 100%; 
  height: 100%;
`;

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const header = css`
  width: 100%;
  height: 10%;
  margin-bottom: 20px;
  cursor: default;

  p {
    animation: ${bounce} 2s 3;
    font-size: 35px;
    font-weight: 800;
  }
`;

export const content = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: orange; */
  gap: 25px;
`;

export const contentBox = css`
  width: 100%;
  height: 30%;
  border: 2px solid #dbdbdb;
  border-radius: 15px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #F5F5F5;
    transform: scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    transition: transform 0.5s ease, box-shadow 0.5s ease;
  }
`;

export const img = css`
 display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center;     /* 세로 중앙 정렬 */
  width: 60%;
  height: 100%;
  /* background-color: aqua; */
  overflow: hidden;

  img {
    border-radius: 10px;
    max-width: 100%;
    max-height: 90%;
    object-fit: cover; 
  }
`;

export const textBox = css`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: default;
`;

export const text = css`
  width: 90%;
  height: 70%;

  span {
  word-spacing: 10px; 
  font-size: 16px;
}
`;

export const button = css`
  width: 90%;
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: orange; */

  button {
    width: 48%;
    padding: 8px;
    border: 2px solid #dbdbdb;
    border-radius: 15px;
    background-color: transparent;
    &:hover {
      background-color: #212842;
      color: #E6D7C4;
      transition: background-color 0.5s ease, color 0.5s ease;
    }
    cursor: pointer;
  }
`;
