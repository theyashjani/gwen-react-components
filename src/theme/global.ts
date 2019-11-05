import { createGlobalStyle } from "styled-components"

export const GlobalStyle = () => createGlobalStyle`
	.gwen * {
		box-sizing: border-box;
	}
	.gwen {
		color: ${(p) => p.theme.gwen.colors.text.primary};
	}
	hr {
		height: 1px;
		width: 100%;
		border-color: ${(p) => p.theme.gwen.colors.divider};
	}
`
