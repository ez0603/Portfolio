import { css } from "@emotion/react";

export const layout = css`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
`;

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const aboutMe = css`
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: center;
  border-radius: 20px;
`;

export const background = css`
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const messageBox = css`
  box-sizing: border-box;
  background-color: transparent;
  width: 100%;
  height: 20%;
  padding-top: 20px;
  margin-bottom: 20px;
  border-top: 1px solid #fff;
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

export const produceLayout = css`
  /* background-color: red; */
  width: 40%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden; /* 추가 */

  & h1 {
    margin: 0;
    font-size: 40px;
  }
`;

export const produce = css`
  padding: 0 20px;
  width: 100%;
  height: 30%; 

`;

export const Education = css`
  padding: 0 20px;
  width: 100%;
  height: 100%; 
  overflow-y: auto;

  & p {
    font-size: 13px;
  }
`;
