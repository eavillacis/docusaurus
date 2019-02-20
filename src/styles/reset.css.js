import { createGlobalStyle } from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
    html, body, #___gatsby, #___gatsby>div {
    height: 100%
    }
    html, body {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }  
`
