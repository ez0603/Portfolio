/** @jsxImportSource @emotion/react */
import React from "react";
import * as s from "./style";

function Layout2({children}) {
  return (
    <div css={s.layout}>
      <div css={s.container}>
        {children}
      </div>
    </div>
  );
}

export default Layout2;
