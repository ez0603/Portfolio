/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const layout = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #f5f5f5;
  padding: 20px;
`;

export const link = css`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 4%;
  top: 50%;
  transform: translateY(-50%);
  & a {
    text-decoration: none;
    padding: 10px 20px;
    margin: 5px 0;
    color: white;
    border-radius: 0 5px 5px 0;
    background-color: #ff5a5f;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    &:nth-of-type(2) {
      background-color: #f8e71c;
    }
  }
`;
