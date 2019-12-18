import React from "react"
import styled, { DefaultTheme } from "styled-components"

interface Props {
	completed: number
	amount: number
}

export function ProgressBar(props: Props) {
	return (
		<ProgressWrapper>
			<ProgressBarWrapper>
				<ProgressBarInner>
					<ProgressBarDone done={props.completed >= props.amount ? 1 : props.completed / props.amount} />
					<Spacers>
						{/* eslint-disable react/no-array-index-key */}
						{props.amount > 1 && props.amount <= 10 && [...new Array(Math.min(props.amount, 20))].map((item, i) => <i key={i} />)}
					</Spacers>
				</ProgressBarInner>
			</ProgressBarWrapper>
			<ProgressAmount completed={props.completed >= props.amount}>x{props.amount}</ProgressAmount>
		</ProgressWrapper>
	)
}

const ProgressWrapper = styled.div`
	height: ${(p) => p.theme.proportions(25)}px;
	display: flex;
	border: ${(p) => p.theme.gwen.border.default(p.theme.scale)};
	overflow: hidden;
	background: ${(p) => p.theme.gwen.colors.background.default};
`
const ProgressBarWrapper = styled.div`
	height: ${(p) => p.theme.proportions(25)}px;
	flex: 4;
`

const ProgressBarInner = styled.div`
	position: relative;
	height: ${(p) => p.theme.proportions(12)}px;
	margin: ${(p) => p.theme.proportions(6)}px ${(p) => p.theme.proportions(6)}px;
	width: 97%;
	background: ${(p) => p.theme.gwen.colors.background.backdrop};
	z-index: 1;
`
const ProgressBarDone = styled.div`
	width: ${(p: { done: number }) => `${p.done * 100}%`};
	height: ${(p) => p.theme.proportions(12)}px;
	background: ${(p) => p.theme.gwen.colors.secondary};
	transition: 0.5s ease-in-out;
`
const Spacers = styled.div`
	position: absolute;
	top: 0;
	height: ${(p) => p.theme.proportions(12)}px;
	width: 100%;
	display: flex;
	i {
		height: 100%;
		flex: 1;
		border-right: ${(p) => p.theme.proportions(2)}px solid ${(p) => p.theme.gwen.colors.background.default};
		:last-child {
			border: none;
		}
	}
	&:after {
		display: block;
		content: "";
		position: absolute;
		right: 0;
		border-top: ${(p) => p.theme.proportions(12)}px solid transparent;
		border-right: ${(p) => p.theme.proportions(8.5)}px solid ${(p) => p.theme.gwen.colors.background.default};
	}
`

interface ProgressAmountType {
	theme: DefaultTheme
	completed: boolean
}
const ProgressAmount = styled.div`
	flex: 1;
	min-width: ${(p) => p.theme.proportions(45)}px;
	background: ${(p: ProgressAmountType) => (!p.completed ? p.theme.gwen.colors.primary : p.theme.gwen.colors.secondary)};
	color: ${(p) => p.theme.gwen.colors.text.success};
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding-right: ${(p) => p.theme.proportions(6)}px;
	font-size: ${(p) => p.theme.proportions(16)}px;
	font-weight: 600;
	position: relative;
	&:before {
		display: block;
		content: "";
		position: absolute;
		left: 0;
		border-bottom: ${(p) => p.theme.proportions(25)}px solid transparent;
		border-left: ${(p) => p.theme.proportions(16)}px solid ${(p) => p.theme.gwen.colors.background.default};
	}
`
