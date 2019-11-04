import { createGlobalStyle } from "styled-components"
import { DefaultTheme } from "./default"
import { Theme } from "./theme"

export const GlobalStyle = (theme: DefaultTheme) => createGlobalStyle`
	.gwen * {
		box-sizing: border-box;
	}
	.gwen {
		color: ${Theme.colors.text.primary};
	}
	hr {
		height: 1px;
		width: 100%;
		border-color: ${Theme.colors.divider};
	}
`
