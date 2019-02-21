import styled from 'styled-components'
import Blockquote from '../Blockquote'

const Paragraph = styled.p`
  display: block;
  box-sizing: border-box;
  padding: 0 28px;
  width: 60%;
  ${Blockquote} & {
    width: 100%;
  }
`

export default Paragraph
