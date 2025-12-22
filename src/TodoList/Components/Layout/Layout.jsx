/** @jsxImportSource @emotion/react */

import Header from "../Header/Header"
import Main from "../Main/Main"
import * as s from "./styles"
import React, { Children } from 'react'

function Layout({ children }) {
  return (
    <div css={s.layout}>
        <div css={s.container}>
          <Header />
          <Main />
          {children}</div>
    </div>
  )
}

export default Layout