import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { SideNav, Nav } from 'react-sidenav'

import { LinkCustom } from '../../styles/global'
import { routes } from './routes.js'

export default function Sidebar() {

  console.log(routes);

  return (

    routes.map((route, index) => (
      <div key={index}>
        <span>{route.name}</span>
        <SideNav defaultSelectedPath={index} key={index}>
          {
            route.children.map((child, index) => {
              console.log(index);
              return (
                <LinkCustom to={child.path}>
                  <Nav key={index}>
                    {child.name}
                  </Nav>
                </LinkCustom>
              )
            })
          }
        </SideNav>
      </div>
    ))
  )
}
