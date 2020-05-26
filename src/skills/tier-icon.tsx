import React from "react"
import SVG from "react-inlinesvg"
import styled from "styled-components"

export type TierIconShape = "square" | "circle" | "triangle" | "star"

const defaultIconColors = {
	square: "#B4830A",
	circle: "#1C915F",
	triangle: "#285376",
	star: "#7040B0",
}

interface Props {
	type: TierIconShape
	text: string | number
	color?: string
}

export const TierIcon = (props: Props) => {
	const { type } = props
	return (
		<Icon color={props.color || defaultIconColors[type]} src={`../icons/skill-tiers/${type}.svg`}>
			<IconText>{props.text}</IconText>
		</Icon>
	)
}

const Icon = styled(SVG)`
	position: relative;
	path,
	rect,
	circle {
		fill: ${(p: { color: string }) => p.color};
	}
`

const IconText = styled.span`
	position: absolute;
	line-height: 100%;
	font-size: 16px;
	text-align: center;
`
