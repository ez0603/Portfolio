import { css } from "@emotion/react";

export const layout = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const container = css`
  width: 100%;
  height: 100%;
  background-color: white;
  /* border: 1px solid #ccc; */
  /* border-radius: 10px; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  /* padding: 20px; */
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const header = css`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
`;

export const personalInfoLayout = css`
  h1 {
    font-size: 40px;
    font-weight: 900;
  }
`;

export const iconText = css`
  display: flex;
  align-items: center;
  margin: 5px 0;
  gap: 10px;
`;

export const personalInfo = css`
  padding-left: 15px;
  border-left: 2px solid #ccc;

  p {
    background-color: aqua;
    margin: 5px 0;
    display: flex; 
    align-items: center;
  }
`;

export const profileImage = css`
  width: 150px;
  height: 190px;
  margin-left: 20px;
  margin-top: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const sectionLayout = css`
box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #F5F4EB;
  padding: 30px;
  /* border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;
export const section = css`
  width: 90%;
  margin-bottom: 20px;
  h2 {
    font-size: 18px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 15px;
  }

  cursor: default;
`;

export const row = css`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const label = css`
  flex: 1;
  font-weight: bold;
  color: #555;
`;

export const value = css`
  flex: 2;
  color: #333;
  ul {
    margin: 0;
    padding-left: 20px;
  }
  li {
    margin-bottom: 5px;
  }
  p {
    margin-top: 0;
  }
`;
