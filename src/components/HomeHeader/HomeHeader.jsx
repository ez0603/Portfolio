/** @jsxImportSource @emotion/react */
import * as s from "./style";

function HomeHeader({ onNavigate }) {
  return (
    <div className="home-header">
      <div css={s.layout}>
        <div css={s.link}>
          <a onClick={() => onNavigate(0)} style={{ cursor: 'pointer' }}>Home</a>
          <a onClick={() => onNavigate(1)} style={{ cursor: 'pointer' }}>Profile</a>
          <a onClick={() => onNavigate(4)} style={{ cursor: 'pointer' }}>Project</a>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
