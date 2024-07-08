/** @jsxImportSource @emotion/react */
import * as s from "./style";

function HomeHeader({ onNavigate }) {
  return (
    <div className="home-header" css={s.layout}>
      <div css={s.link}>
        <button onClick={() => onNavigate(0)} css={s.button}>HOME</button>
        <button onClick={() => onNavigate(1)} css={s.button}>PROFILE</button>
        <button onClick={() => onNavigate(4)} css={s.button}>ABOUT ME</button>
        <button onClick={() => onNavigate(4)} css={s.button}>PROJECT</button>
      </div>
    </div>
  );
}

export default HomeHeader;
