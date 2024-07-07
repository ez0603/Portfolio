/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as s from "./style";

function Header(props) {
  return (
    <div>
      <div css={s.layout}>
        <div css={s.link}>
          <Link to="/Portfolio/Home">Home</Link>
          <Link to="/Profile">Profile</Link>
          <Link to="/Project">Project</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
