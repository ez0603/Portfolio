import { css } from "@emotion/react";

export const layout = css`
  position: relative;
  width: 100%;
  height: 93vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  margin-top: 63px;
`;

export const container = css`
  width: 100%;
  height: 100%;
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
`;

export const profileContainer = css`
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 100%;
  height: 100%;
  /* background-color: aqua; */
  display: flex;
  justify-content: space-around;
`;

export const aboutMe = css`
  /* background-color: orange; */
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  position: relative;
  flex-direction: column;
`;

export const background = css`
  background-color: #fff;
  width: 70%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

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
  left: 35%;
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
  background-color: transparent;
  width: 100%;
  height: 25%;
  border-top: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`;

export const copiedMessage = css`
  color: yellow;
  font-size: 14px;
  margin-top: 10px;
`;
