/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const layout = css`
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust height to fit the viewport */
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const container = css`
  width: 80%;
  height: 80%; /* Adjust height to fit the content */
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden; /* Ensure content does not overflow */
`;

export const content = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
`;

export const text = css`
  font-family: 'RixInooAriDuriR', sans-serif;
  font-size: 135px; /* Adjust font-size to be responsive */
  color: #FF7777;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; /* Allow text to wrap within the container */
  text-align: center;

  span {
    position: relative;
    top: 0; /* Reset top position */
    display: inline-block;
    animation: bounce 1.2s ease infinite alternate;
    text-shadow: 0 1px 0 #CCC,
                 0 2px 0 #CCC,
                 0 3px 0 #CCC,
                 0 4px 0 #CCC,
                 0 5px 0 #CCC,
                 0 6px 0 transparent,
                 0 7px 0 transparent,
                 0 8px 0 transparent,
                 0 9px 0 transparent,
                 0 10px 10px rgba(0, 0, 0, 0.4);
  }

  span:nth-of-type(2) { animation-delay: 0.1s; }
  span:nth-of-type(3) { animation-delay: 0.2s; }
  span:nth-of-type(4) { animation-delay: 0.3s; }
  span:nth-of-type(5) { animation-delay: 0.4s; }
  span:nth-of-type(6) { animation-delay: 0.5s; }
  span:nth-of-type(7) { animation-delay: 0.6s; }
  span:nth-of-type(8) { animation-delay: 0.7s; }

  @keyframes bounce {
    100% {
      top: -20px;
      text-shadow: 0 1px 0 #CCC,
                   0 2px 0 #CCC,
                   0 3px 0 #CCC,
                   0 4px 0 #CCC,
                   0 5px 0 #CCC,
                   0 6px 0 #CCC,
                   0 7px 0 #CCC,
                   0 8px 0 #CCC,
                   0 9px 0 #CCC,
                   0 50px 25px rgba(0, 0, 0, 0.2);
    }
  }
`;