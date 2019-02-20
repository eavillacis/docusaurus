import React from 'react'
// import ReactJson from 'react-json-view'
// import axios from 'axios'
// import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div>
        <span>hey</span>
      </div>
    </Layout>
  )
}
