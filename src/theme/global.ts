import { createGlobalStyle } from "styled-components"
import { ThemeInterface } from "./interface"

export const GlobalStyle = (theme: ThemeInterface) => createGlobalStyle`
	.gwen * {
		box-sizing: border-box;
	}
	.gwen {
		color: ${theme.colors.text.primary};
	}
	hr {
		height: 1px;
		width: 100%;
		border-color: ${theme.colors.divider};
	}
	.gwen-highlight-cover {
		position:relative;
		:after {
			content:"";
			position:fixed;
			left: 0;
			top: 0;
			width: 100vw;
			height: 100vh;
			background: rgba(0,0,0,.5);
			z-index: 9995;
			transform: translateZ(-1em);
		}
	}
	.gwen-ui-highlight-element {
		position: absolute;
		z-index: 9999;
	}
`
