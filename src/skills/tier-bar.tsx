import React from "react"
import styled from "styled-components"
import { TierIcon, TierIconShape } from "./tier-icon"

interface Props {
	currentProgress: number
	requiredProgress: number
	tierNumber: number
	maxTier?: number
	icon: TierIconShape
	iconColor?: string
	foregroundColor?: string
	backgroundColor?: string
	textColor?: string
}

export const TieredProgressBar = (props: Props) => {
	return (
		<Wrapper>
			<TierIcon text={props.tierNumber} type={props.icon} />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
`

interface TierProps {
	color?: string
	progress?: number
	background?: string
}

const Tier = styled.div`
	height: 20px;
	flex: 1;
	&:last-child {
		border-radius: 0 50% 50% 0;
	}
	background: ${(props: TierProps) =>
		props.progress
			? `linear-gradient(90deg, ${props.color || "green"}, ${props.progress}, ${props.background || "grey"}, ${100 - props.progress})`
			: props.color || "grey"};
	margin-left: 5px;
`
