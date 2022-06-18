import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  //variables
  :root {
    blue-100: #2CBFC7;
    carmin-100: #610631;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *{
    font-family: 'Raleway', sans-serif;
  }
  p{
    font-size: 1.6rem;
  }
  .center-plis{
    display: grid;
    place-items: center;
  }
 
`;
