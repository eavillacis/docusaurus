import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "../Header"
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-4">
              <Sidebar />
            </div>
            <div className="col-xs-8">
              <main>{children}</main>
              <footer>
                footer is here
              </footer>
            </div>
          </div>
        </div>
      </>
    )}
  />
)

export default Layout
