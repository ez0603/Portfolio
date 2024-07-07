/** @jsxImportSource @emotion/react */
import * as s from "./style";

function HomeHeader({ onNavigate }) {
  return (
    <div className="home-header" css={s.layout}>
      <div css={s.link}>
        <button onClick={() => onNavigate(0)} css={s.button}>Home</button>
        <button onClick={() => onNavigate(1)} css={s.button}>Profile</button>
        <button onClick={() => onNavigate(4)} css={s.button}>Project</button>
      </div>
    </div>
  );
}

export default HomeHeader;
