/** @jsxImportSource @emotion/react */
import * as s from "./style";
import "animate.css";
import { FaFolder } from "react-icons/fa";

function Home(props) {
  return (
    <div css={s.layout}>
      <div css={s.container}>
        <div css={s.content}>
          <div css={s.subheadingLayout}>
          </div>
            <div css={s.subheading}>
              {/* <p>
              <FaFolder size={150} color="white" />
            </p> */}
              <span>DEVELOPER POTOFOLIO</span>
            </div>
          <h1 css={s.text}>
            <span>PORTFOLIO</span>
          </h1>

          <div css={s.nameLayout}>
            <p></p>
            <span>LEE JIEON</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
