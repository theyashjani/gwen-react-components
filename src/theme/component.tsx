import React from "react"
import styled, { DefaultTheme, ThemeProvider } from "styled-components"
import { darkTheme } from "./dark"
import { GlobalStyle } from "./global"
import { lightTheme } from "./light"
import { ThemeOptions } from "./options"

interface Props {
	options?: ThemeOptions
	children: JSX.Element | JSX.Element[]
}

export class ThemeComponent extends React.PureComponent<Props> {
	render() {
		const theme = getTheme(this.props.options || {})
		const GS = GlobalStyle(theme)
		return (
			<ThemeProvider theme={theme}>
				<GwenWrapper className="gwen">
					<GS />
					{this.props.children}
				</GwenWrapper>
			</ThemeProvider>
		)
	}
}

export function getTheme(options: ThemeOptions): DefaultTheme {
	return options.theme === "light" ? lightTheme(options) : darkTheme(options)
}

const GwenWrapper = styled.div`
	height: 100%;
	width: 100%;
`
