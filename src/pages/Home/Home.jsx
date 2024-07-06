/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Global } from "@emotion/react";
import "animate.css";

function Home(props) {
  return (
    <div css={s.layout}>
      <Global styles={s.globalStyles} />
      <div css={s.container}>
        <div css={s.content}>
          <h1 css={s.text}>
            <span>P</span>
            <span>O</span>
            <span>R</span>
            <span>T</span>
            <span>F</span>
            <span>O</span>
            <span>L</span>
            <span>I</span>
            <span>O</span>
          </h1>
          <div css={s.linksBox}>
            <ul css={s.links}>
              <li>
                <a href="/Profile"  data-text="RESUME">
                  RESUME
                </a>
              </li>
              <li>
                <a href="/Project" data-text="About Me">
                  About Me
                </a>
              </li>
              <li>
                <a href="/Project" data-text="Projects">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;