/** @jsxImportSource @emotion/react */
import * as s from "./style";

function Layout({children}) {
	return (
		<div css={s.layout}>
      <div css={s.container}>
      {children}
      </div>
    </div>
	);
}

export default Layout;