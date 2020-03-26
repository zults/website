import React from "react"
import PropTypes from "prop-types"

import Header from "../Header"
import Footer from '../Footer'

import * as S from './styled'
import GlobalStyles from '../../styles/global'

const Layout = ({ children }) => {
  return (
    <S.LayoutContainer>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </S.LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
