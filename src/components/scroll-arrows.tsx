import React from "react"
import { ScrollParams } from "react-virtualized"
import styled, { DefaultTheme } from "styled-components"
import { Theme } from "../theme"

export class ScrollArrows extends React.PureComponent<Partial<ScrollParams>> {
	showArrowTop() {
		return !!this.props.scrollTop && this.props.scrollTop > 10
	}

	showArrowBottom() {
		if (this.props.scrollHeight && this.props.clientHeight && (this.props.scrollTop || this.props.scrollTop === 0)) {
			return this.props.scrollHeight - this.props.clientHeight > this.props.scrollTop + 10
		}
		return false
	}

	render() {
		const arrow = "https://gwen.insertcoin.se/widget/images/icons/arrow-red.svg"
		return (
			<>
				<ArrowTop show={this.showArrowTop()}>
					<ArrowBox>
						<img src={arrow} alt="arrow" />
					</ArrowBox>
				</ArrowTop>
				<ArrowBottom show={this.showArrowBottom()}>
					<ArrowBox>
						<img src={arrow} alt="arrow" />
					</ArrowBox>
				</ArrowBottom>
			</>
		)
	}
}

const ArrowBox = styled.div`
	display: flex;
	position: absolute;
	bottom: 0;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 25px;
	background: ${Theme.colors.background.header};
	box-shadow: ${Theme.boxShadow.large};
	img {
		height: 10px;
	}
`
interface ArrowStyleType {
	theme: DefaultTheme
	show: boolean
}
const ArrowStyle = styled.div`
	pointer-events: none;
	position: absolute;
	left: 0;
	z-index: 50;
	width: 100%;
	display: block;
	transition: 0.5s ease-in-out;
	opacity: ${(p: ArrowStyleType) => (p.show ? 1 : 0)};
	height: 35px;
	user-select: none;
	overflow: hidden;
`
const ArrowTop = styled(ArrowStyle)`
	${(p: ArrowStyleType) => p && ""}
	top: 0;
	transform: rotate(180deg);
`
const ArrowBottom = styled(ArrowStyle)`
	${(p: ArrowStyleType) => p && ""}
	bottom: 0;
`
