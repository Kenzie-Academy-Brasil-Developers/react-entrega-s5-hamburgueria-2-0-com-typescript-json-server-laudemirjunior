import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-family: 'Inter', sans-serif; 
  }

  .App {
      width: 100vw;
      min-height: 100vh;
      color: var(--gray-600) 
  }
  :root {
    --primary: #27AE60;
    --primary-50: #93D7AF;
    --secondary: #EB5757;
    --gray-600: #333333;
    --gray-300: #828282;
    --gray-100: #E0E0E0;
    --gray-50: #999999;
    --gray-6: #F2F2F2;
    --gray-0: #F5F5F5;
    --negative: #E60000;
    --warning: #FFCD07;
    --sucess: #168821;
    --information: #155BCB;
  }
  button, svg {
    cursor: pointer;
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px var(--gray-0) inset;
    border: transparent;
}

  `;

export default GlobalStyle;
