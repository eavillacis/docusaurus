import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import renderNodes from './node-renderer'
import { Wrapper, Content, CodeBox } from './style'

export default ({ data: { content } }) => {
  return (
    <Layout>
      <Wrapper>
        <CodeBox />
        <Content>{renderNodes(content.htmlAst.children)}</Content>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    content: markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      headings {
        value
        depth
      }
      frontmatter {
        title
      }
    }
  }
`
