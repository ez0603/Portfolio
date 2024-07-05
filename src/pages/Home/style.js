import { css } from "@emotion/react";

export const layout = css`
  position: relative;
  width: 100%;
  height: 93vh;
  background-color: #ecc7c7;
  display: flex;
  align-items: center;
  margin-top: 64px;
`;

export const container = css`
  width: 100%;
  height: 100%;
  background-color: aqua;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const content = css`
  width: 90%;
  height: 100%;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;

  & h1 {
    font-size: 200px;
  }
`;
