/** @jsxImportSource @emotion/react */
import * as s from "./style";

function HomeLayout({ children }) {
  return (
      <div css={s.background}>
        <div css={s.layout}>{children}</div>
      </div>
  );
}

export default HomeLayout;
