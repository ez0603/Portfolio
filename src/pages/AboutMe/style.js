/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

const fadeIn = keyframes`
   0% {
    opacity: 0;
    transform: translateY(20px); 
  }
  100% {
    opacity: 1;
    transform: translateY(0); 
  }
`;

export const layout = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
`;

export const header = css`
  width: 100%;
  height: 15%;
  background-color: #212842;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
    font-size: 40px;
    color: #e6d7c4;
  }

  b {
    display: inline-block;
    font-size: 43px;
    animation: ${fadeIn} 1s ease-in-out; 
    animation-fill-mode: forwards;
  }

  b:nth-of-type(1) { animation-delay: 0s; }
  b:nth-of-type(2) { animation-delay: 0.2s; }
  b:nth-of-type(3) { animation-delay: 0.4s; }
  b:nth-of-type(4) { animation-delay: 0.6s; }
  b:nth-of-type(5) { animation-delay: 0.8s; }
  b:nth-of-type(6) { animation-delay: 1s; }
  b:nth-of-type(7) { animation-delay: 1.2s; }
  b:nth-of-type(8) { animation-delay: 1.4s; }
  b:nth-of-type(9) { animation-delay: 1.6s; }
  b:nth-of-type(10) { animation-delay: 1.8s; }
`;

export const container = css`
  width: 100%;
  height: 100%;
  /* background-color: #f5f5f5; */
`;

export const tagLayout = css`
  width: 85%;
  height: 5%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 20px;
  cursor: default;
  animation: ${fadeIn} 2s ease-in-out forwards;
  animation-delay: 1s;
  &.visible {
    opacity: 1;
  }

  p {
    box-sizing: border-box;
    border-radius: 30px;
    padding: 10px 25px;
    text-align: center;
    background-color: white;
    border: 2px solid #dbdbdb;
    &:hover {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      transform: scale(1.02);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const content = css`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const text = css`
  box-sizing: border-box;
  width: 92%;
  height: 55%;
  border: 3px solid #212842;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  border-radius: 15px;
  background-color: #f5f4eb;
  cursor: default;

  b {
    font-size: 17px;
  }
`;

export const text2 = css`
  box-sizing: border-box;
  width: 88%;
  height: 20%;
  display: flex;
  align-items: center;
  cursor: default;

  span {
    font-size: 20px;
  }

  p {
    margin: 0;
  }

  b {
    transition: transform 0.3s ease, color 0.3s ease;
    display: inline-block;
    &:hover {
      transform: scale(1.3);
      background-color: white;
      color: #007bff;
    }
  }
`;
