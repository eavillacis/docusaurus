import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { SideNav, Nav } from 'react-sidenav'

import { LinkCustom } from '../../styles/global'

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
            <div key={node.excerpt}>
              <LinkCustom to={node.fields.slug}>
                <Nav>{node.excerpt}</Nav>
              </LinkCustom>
            </div>
          ))}
        </SideNav>
      )}
    />
  )
}
