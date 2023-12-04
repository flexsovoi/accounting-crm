import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
		/* font-family: 'Inter', sans-serif; */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* background-color: ${p => p.theme.primary.bg}; */
		color: black
  }
`
export default GlobalStyles
