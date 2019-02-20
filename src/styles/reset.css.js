import { createGlobalStyle } from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato');

    html, body, #___gatsby, #___gatsby>div {
    height: 100%
    }
    html, body {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    body {
        font-family: 'Lato', sans-serif;
        font-size: 13px;
    }
    input, textarea {
        font-size: 13px;
    }
    *, ::after, ::before{
        box-sizing: border-box;
    }  
`
