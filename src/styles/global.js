import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
       margin: 0;
       padding: 0;
       outline: 0;
       box-sizing: border-box; 
       -moz-box-sizing: border-box;
       -webkit-box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background-color: #ffffff;
        color: #333333;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 15px;
        -webkit-font-smoothing: antialiased !important; 
    }

    ul {
        list-style: none;
    }

    ::-moz-selection { 
        color: #FFFFFF;
        background: #4A90D9;
    }

    ::selection {
        color: #FFFFFF;
        background: #4A90D9;
    }
`;
