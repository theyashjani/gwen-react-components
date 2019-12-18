import React from "react"
import styled, { DefaultTheme } from "styled-components"
import { Currency } from "../../types/reward"

interface Props {
	type: Currency
	amount?: number
	icon?: string
	description?: string
}
interface State {
	clicks: number
}

export class Reward extends React.PureComponent<Props, State> {
	state: State = { clicks: 0 }

	easterEgg() {
		this.setState((prevState: Readonly<State>) => ({ ...prevState, clicks: prevState.clicks + 1 }))
	}

	icon() {
		return this.props.icon || `https://gwen.insertcoin.se/widget/images/currency/${this.props.type}.svg`
	}

	render() {
		return (
			<Wrapper onClick={() => this.easterEgg()} amount={typeof this.props.amount === "number"}>
				{typeof this.props.amount === "number" && (
					<Amount>
						<span>{this.props.amount}</span>
					</Amount>
				)}
				<Icon src={this.icon()} alt="icon" />
				<Description>{this.props.description}</Description>
				{this.state.clicks >= 10 && <EasterEgg />}
			</Wrapper>
		)
	}
}

interface WrapperProps {
	theme: DefaultTheme

	amount: boolean
}
const Wrapper = styled.div`
	position: relative;
	margin: auto;
	margin-top: ${(p: WrapperProps) => (p.amount ? `${p.theme.proportions(16)}px` : "0")};
	margin-bottom: ${(p: WrapperProps) => p.theme.proportions(24)}px;
	border-radius: 100%;
	width: ${(p: WrapperProps) => p.theme.proportions(80)}px;
	height: ${(p: WrapperProps) => p.theme.proportions(80)}px;
	user-select: none;
`

const Icon = styled.img`
	display: block;
	width: ${(props) => props.theme.proportions(80)}px;
	height: ${(props) => props.theme.proportions(80)}px;
	object-fit: contain;
`
const Amount = styled.div`
	display: flex;
	position: absolute;
	top: -20%;
	width: 100%;
	span {
		display: inline-block;
		margin: auto;
		background: ${(p) => p.theme.colors.background.badge};
		font-size: ${(p) => p.theme.proportions(14)}px;
		line-height: ${(p) => p.theme.proportions(16)}px;
		padding: ${(p) => p.theme.proportions(6)}px ${(p) => p.theme.proportions(16)}px;
		border-radius: ${(p) => p.theme.proportions(6)}px;
		box-shadow: ${(p) => p.theme.boxShadow.default};
	}
`
const Description = styled.div`
	display: flex;
	color: ${(p) => p.theme.colors.text.secondary};
	font-size: ${(p) => p.theme.proportions(14)}px;
	line-height: ${(p) => p.theme.proportions(14)}px;
	font-weight: 400;
	margin-top: ${(p) => p.theme.proportions(6)}px;
	text-transform: capitalize;
	white-space: nowrap;
	justify-content: center;
`
const EasterEgg = styled.i`
	position: absolute;
	top: 1%;
	left: 1%;
	overflow: hidden;
	width: 102%;
	height: 102%;
	border-radius: 100%;
	&:before,
	&:after {
		position: absolute;
		display: block;
		right: 0;
		content: "";
		width: 0;
		height: 0;
		animation: eatAnimation 1s infinite;
		border-left: ${(p) => p.theme.proportions(40)}px solid transparent;
	}
	&:before {
		top: 50%;
		border-top: 0 solid ${(p) => p.theme.colors.background.default};
	}
	&:after {
		bottom: 50%;
		border-bottom: 0 solid ${(p) => p.theme.colors.background.default};
	}
	@keyframes eatAnimation {
		0% {
			border-top-width: 0;
			border-bottom-width: 0;
		}
		50% {
			border-top-width: ${(p) => p.theme.proportions(40)}px;
			border-bottom-width: ${(p) => p.theme.proportions(40)}px;
		}
		100% {
			border-top-width: 0;
			border-bottom-width: 0;
		}
	}
`
