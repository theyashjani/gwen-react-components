import React from "react"
import { getTheme, GlobalStyle, styled, ThemeProvider } from "."
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

const GwenWrapper = styled.div`
	height: 100%;
	width: 100%;
`
