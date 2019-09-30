import React from "react"
import { styled, ThemeInterface } from "../../theme"

interface Props {
	amount?: number
	size?: number
	description?: string
	icon: JSX.Element
	background: string
}
interface State {
	clicks: number
}

export class RewardWrapper extends React.PureComponent<Props, State> {
	state: State = { clicks: 0 }

	easterEgg() {
		this.setState((prevState: Readonly<State>) => ({ ...prevState, clicks: prevState.clicks + 1 }))
	}

	render() {
		const size = this.props.size || 80
		return (
			<Wrapper onClick={() => this.easterEgg()} size={size} amount={typeof this.props.amount === "number"} background={this.props.background}>
				{typeof this.props.amount === "number" && (
					<Amount size={size}>
						<span>{this.props.amount}</span>
					</Amount>
				)}
				<Icon size={size}>{this.props.icon}</Icon>
				<Description size={size}>{this.props.description}</Description>
				{this.state.clicks >= 10 && <EasterEgg size={size} />}
			</Wrapper>
		)
	}
}

interface WrapperProps {
	theme: ThemeInterface
	size: number
	amount: boolean
	background: string
}
const Wrapper = styled.div`
	position: relative;
	margin: auto;
	margin-top: ${(props: WrapperProps) => (props.amount ? `${props.size * 0.2}px` : "0")};
	margin-bottom: ${(props: WrapperProps) => props.size * 0.3}px;
	background: ${(props) => props.background};
	border-radius: 100%;
	width: ${(props: WrapperProps) => props.size}px;
	height: ${(props: WrapperProps) => props.size}px;
	user-select: none;
`
interface SizeProps {
	theme: ThemeInterface
	size: number
}
const Icon = styled.div`
	padding: 17%;
	height: ${(props: SizeProps) => props.size}px;
	svg {
		display: block;
		width: ${(props: SizeProps) => props.size / 1.5}px;
		height: ${(props: SizeProps) => props.size / 1.5}px;
	}
`
const Amount = styled.div`
	display: flex;
	position: absolute;
	top: -20%;
	width: 100%;
	span {
		display: inline-block;
		margin: auto;
		background: ${(props) => props.theme.colors.background.badge};
		font-size: ${(props: SizeProps) => props.size * 0.175}px;
		line-height: ${(props: SizeProps) => props.size * 0.2}px;
		padding: ${(props: SizeProps) => props.size * 0.075}px ${(props) => props.size * 0.125}px;
		border-radius: ${(props: SizeProps) => props.size * 0.075}px;
		box-shadow: ${(props: SizeProps) => props.theme.boxShadow.default};
	}
`
const Description = styled.div`
	display: flex;
	color: ${(props) => props.theme.colors.text.secondary};
	font-size: ${(props: SizeProps) => props.size * 0.175}px;
	line-height: ${(props: SizeProps) => props.size * 0.175}px;
	font-weight: 400;
	margin-top: ${(props: SizeProps) => props.size * 0.075}px;
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
		border-left: ${(props: SizeProps) => props.size / 2}px solid transparent;
	}
	&:before {
		top: 50%;
		border-top: 0 solid ${(props) => props.theme.colors.background.default};
	}
	&:after {
		bottom: 50%;
		border-bottom: 0 solid ${(props) => props.theme.colors.background.default};
	}
	@keyframes eatAnimation {
		0% {
			border-top-width: 0;
			border-bottom-width: 0;
		}
		50% {
			border-top-width: ${(props: SizeProps) => props.size / 2}px;
			border-bottom-width: ${(props: SizeProps) => props.size / 2}px;
		}
		100% {
			border-top-width: 0;
			border-bottom-width: 0;
		}
	}
`
