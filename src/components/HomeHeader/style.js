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
  width: 100%;
`;

export const link = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: -4%;
  top: 120%;
  /* transform: translateY(-50%); */
`;

export const button = css`
  text-decoration: none;
  padding: 20px 20px;
  margin: 10px 0; /* 간격을 좀 더 넓게 설정 */
  color: white;
  border-radius: 0 5px 5px 0;
  background-color: #8DCAE5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  &:nth-of-type(2) {
    background-color: #023047;
  }
  &:nth-of-type(3) {
    background-color: #FFB605;
  }
  &:nth-of-type(4) {
    background-color: #E86F52;
  }
  &:hover {
    opacity: 0.8;
  }
`;
