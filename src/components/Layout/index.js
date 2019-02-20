import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../Header'
import Sidebar from '../Sidebar'

import { Wrapper } from './style'
import { GlobalStyle } from '../../styles/reset.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Wrapper>
          <div>
            <Sidebar />
          </div>
          <div>
            <main>{children}</main>
            <footer>footer is here</footer>
          </div>
        </Wrapper>
      </>
    )}
  />
)

export default Layout
