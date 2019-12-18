import React from "react"
import styled from "styled-components"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
}

export class Input extends React.PureComponent<Props> {
	render() {
		const { label, ...inputprops } = this.props
		const { value } = inputprops as { value: number }
		if (["object", "undefined"].includes(typeof value) || (inputprops.type === "number" && Number.isNaN(Number(value)))) {
			inputprops.value = ""
		}
		return (
			<InputWrapper>
				<input {...inputprops} />
			</InputWrapper>
		)
	}
}

const InputWrapper = styled.div`
	display: block;
	line-height: 16px;
	font-size: 16px;
	width: 100%;
	margin: 0;
	input {
		width: 100%;
		background: ${(p) => p.theme.colors.background.header};
		color: ${(p) => p.theme.colors.text.primary};
		border: none;
		outline: none;
		outline-offset: 0;
		padding: 0 ${(p) => p.theme.proportions(1)}px;
		height: ${(p) => p.theme.proportions(20)}px;
		font-size: ${(p) => p.theme.proportions(14)}px;
	}
`
