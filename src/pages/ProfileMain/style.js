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
  height: 93vh;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
`;

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const content = css`
  width: 90%;
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

export const aboutMe = css`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  position: relative;
  flex-direction: column;
`;

export const background = css`
  background-color: transparent;
  width: 90%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & img {
    width: 100%;
    border-radius: 25px;
    height: 100%;
    opacity: 0.5;
  }
`;

export const img = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: end;

  & img {
    border-radius: 40px;
    width: 150px;
    height: 150px;
  }

  & h3 {
    font-weight: 700;
    color: white;
    margin-top: 10px;
  }
`;

export const messageBox = css`
  box-sizing: border-box;
  background-color: transparent;
  width: 100%;
  height: 20%;
  padding-top: 20px;
  margin-bottom: 20px;
  border-top: 1px solid white;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  position: relative;
  cursor: pointer;
`;

export const copiedMessage = css`
  box-sizing: border-box;
  color: white;
  font-size: 14px;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: black;
  text-align: center;
  font-size: 20px;
  border-radius: 10px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  transition: opacity 0.5s ease, transform 0.5s ease;

  &::after {
    content: "";
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent black transparent;
  }

  &.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

export const profileLayout = css`
  width: 70%;
  height: auto;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 0s;
  &.visible {
    opacity: 1;
  }
`;

export const profileBox = css`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 0ms.5;
  &.visible {
    opacity: 1;
  }
`;

export const textbox = css`
  box-sizing: border-box;
  width: 94%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  justify-content: center;
  padding: 10px 30px;
  margin-left: 35px;
  border-radius: 20px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 1s;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
  
  &.visible {
    opacity: 1;
  }

  & h3 {
    margin: 10px 0;
    font-weight: 700;
  }

  & p {
    font-weight: 700;
    margin: 0;
  }
`;

export const text = css`
  width: 100%;
  height: 100%;
  background-color: #fff;
  font-size: 18px;
  padding: 10px 0;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 2s;
  &.visible {
    opacity: 1;
  }
`;

export const skillLayout = css`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 3s;
  &.visible {
    opacity: 1;
  }
`;

export const skillBox = css`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 30px;
  padding-left: 35px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 4s;
  &.visible {
    opacity: 1;
  }
`;

export const skillCategory = css`
  border: 1px solid #dbdbdb;
  flex: 0 1 calc(45% - 10px);
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 4s;
  &.visible {
    opacity: 1;
  }

  & h3 {
    margin-right: 10px;
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
  gap: 15px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 4s;
  &.visible {
    opacity: 1;
  }
  
`;

export const icon = css`
  width: calc(100% / 3 - 10px);
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
