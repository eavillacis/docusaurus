import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../Header'
import Sidebar from '../Sidebar'

import { Wrapper, SidebarWrapper, PageWrapper, Main } from './style'
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
          <SidebarWrapper>
            <Sidebar />
          </SidebarWrapper>
          <PageWrapper>
            <Main>{children}</Main>
          </PageWrapper>
        </Wrapper>
      </>
    )}
  />
)

export default Layout
