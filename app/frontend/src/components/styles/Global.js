import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{box-sizing: border-box;}

body {
    background: white;
    color: black;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 1.1em;
    margin: 0;
}

p {
    opacity: 0.8;
    line-height: 1;
}

`

export default GlobalStyles