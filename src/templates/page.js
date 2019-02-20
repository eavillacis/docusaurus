import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import { Wrapper, InformationWrapper } from './style'

export default ({ data }) => {
  const {
    // post,
    frontmatter
  } = data.markdownRemark
  return (
    <Layout>
      {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      <Wrapper>
        <InformationWrapper>hey</InformationWrapper>
        <div>
          {frontmatter.body.map(input => (
            <span key={input}>{input}</span>
          ))}
        </div>
      </Wrapper>
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
