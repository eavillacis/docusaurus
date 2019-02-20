import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import { SideNav, Nav } from 'react-sidenav'

export default function Sidebar() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark {
            totalCount
            edges {
              node {
                fields {
                  slug
                }
                excerpt
              }
            }
          }
        }
      `}
      render={data => (
        <SideNav defaultSelectedPath="1">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <Nav>{node.excerpt}</Nav>
              </Link>
            </div>
          ))}
        </SideNav>
      )}
    />
  )
}
