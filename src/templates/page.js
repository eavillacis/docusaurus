import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <h1>{post.frontmatter.title}</h1>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
