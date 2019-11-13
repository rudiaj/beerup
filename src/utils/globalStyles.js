import { createGlobalStyle } from "styled-components";
import pattern from "../assets/pattern.png";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');

    body{
        background-color: black;
        background-image: url(${pattern});
        background-repeat: repeat;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        line-height: 1.3;
        color: rgba(255,255,255,0.9);
    }

    main, section, article, aside {
        display: block;
    }

    span {
        display: inline-block;
    }

    ul {
        list-style-type: none;
    }
`;

export default GlobalStyle;
