import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../Header'
import Sidebar from '../Sidebar'

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
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <div>
            <Sidebar />
          </div>
          <div>
            <main>{children}</main>
            <footer>footer is here</footer>
          </div>
        </div>
      </>
    )}
  />
)

export default Layout
