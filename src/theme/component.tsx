import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./global"
import { ThemeOptions } from "./options"
import { GwenTheme } from "./theme"

interface Props {
	children?: JSX.Element | JSX.Element[]
	themeOptions?: ThemeOptions
}

export class WrapperComponent extends React.PureComponent<Props> {
	render() {
		const GS = GlobalStyle()
		const theme = GwenTheme(this.props.themeOptions || {})
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

const GwenWrapper = styled.div`
	height: 100%;
	width: 100%;
`
