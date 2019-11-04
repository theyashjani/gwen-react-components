import React from "react"
import styled from "styled-components"
import { GlobalStyle } from "./global"
import { Theme } from "./theme"

interface Props {
	children: JSX.Element | JSX.Element[]
}

export class WrapperComponent extends React.PureComponent<Props> {
	render() {
		const GS = GlobalStyle(Theme)
		return (
			<GwenWrapper className="gwen">
				<GS />
				{this.props.children}
			</GwenWrapper>
		)
	}
}

const GwenWrapper = styled.div`
	height: 100%;
	width: 100%;
`
