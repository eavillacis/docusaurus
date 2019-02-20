import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import { Wrapper, InformationWrapper } from './style'

export default ({ data }) => {
  const {
    post
    // frontmatter
  } = data.markdownRemark
  return (
    <Layout>
      <Wrapper>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        <InformationWrapper>hey</InformationWrapper>
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
