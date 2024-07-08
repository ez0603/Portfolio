import { css, keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const layout = css`
  position: relative;
  width: 100%;
  height: 100%;
  /* background-color: #f5f5f5; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const content = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const profileContainer = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const skillLayout = css`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 1s;
  &.visible {
    opacity: 1;
  }
`;

export const skillBox = css`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 30px;
  padding-left: 35px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 2s;
  &.visible {
    opacity: 1;
  }
  /* background-color: aqua; */
`;

export const skillCategory = css`
  border: 1px solid #dbdbdb;
  width: 100%;
  padding: 25px;
  background-color: #fff;
  border-radius: 10px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 2s;
  &.visible {
    opacity: 1;
  }

  & h3 {
    margin-right: 10px;
    margin-top: 10px;
  }

  transition: transform 0.5s ease, box-shadow 0.5s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

export const iconBox = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 2s;
  &.visible {
    opacity: 1;
  }
  
`;

export const icon = css`
  height: 50px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  & p {
    font-size: 15px;
  }
`;
