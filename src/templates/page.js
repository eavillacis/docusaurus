import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <h1>{post.frontmatter.title}</h1>
    </div>
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
