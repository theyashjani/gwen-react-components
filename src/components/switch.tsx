import React from "react"
import styled, { DefaultTheme } from "styled-components"

interface Props {
	value?: boolean
	onChange: (value: boolean) => void
}

export function Switch(props: Props) {
	return (
		<SwitchWrapper onClick={() => props.onChange(!props.value)} value={props.value}>
			<div />
		</SwitchWrapper>
	)
}

interface SwitchProps {
	theme: DefaultTheme
	value?: boolean
}
const SwitchWrapper = styled.div`
	font-size: ${(p) => p.theme.proportions(12)}px;
	position: relative;
	display: inline-block;
	> div {
		position: relative;
		float: left;
		height: ${(p) => p.theme.proportions(8)}px;
		border-radius: ${(p) => p.theme.proportions(4)}px;
		width: ${(p) => p.theme.proportions(24)}px;
		margin: ${(p) => p.theme.proportions(16)}px ${(p) => p.theme.proportions(12)}px;
		background: ${(p) => p.theme.gwen.colors.background.backdrop};
		&:before {
			position: absolute;
			top: -${(p) => p.theme.proportions(3)}px;
			content: "";
			height: ${(p) => p.theme.proportions(14)}px;
			width: ${(p) => p.theme.proportions(14)}px;
			border-radius: ${(p) => p.theme.proportions(7)}px;
			background: ${(p: SwitchProps) => p.theme.gwen.colors.text.primary};
			left: ${(p: SwitchProps) => (p.value ? `${p.theme.proportions(12)}px` : `-${p.theme.proportions(2)}px`)};
			transition: all ${(p) => p.theme.gwen.transition.duration}ms ${(p) => p.theme.gwen.transition.effect};
			z-index: 2;
			box-shadow: ${(p) => p.theme.gwen.boxShadow.default};
		}
	}
`
