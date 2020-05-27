import React from "react"
import styled from "styled-components"
import { TierIcon, TierIconShape } from "./tier-icon"

interface Props {
	currentTierNumber: number
	currentTierProgress: number
	currentTierTotal: number
	max?: number
	icon: TierIconShape
	iconColor?: string
	progressColor?: string
	backgroundColor?: string
}

export const TieredProgressBar = (props: Props) => {
	const { currentTierNumber, currentTierProgress, currentTierTotal, max, progressColor, backgroundColor } = props
	return (
		<Wrapper>
			<TierIcon text={currentTierNumber} type={props.icon} color={props.iconColor} />
			{(() => {
				if (!max) return <Tier color={progressColor} background={backgroundColor} progress={Math.floor((currentTierProgress / currentTierTotal) * 100)} />
				const items: JSX.Element[] = []
				for (let i = 1; i <= max; i++) {
					if (i < currentTierNumber) {
						items.push(<Tier color={progressColor} background={backgroundColor} progress={100} />)
					} else if (i > currentTierNumber) {
						items.push(<Tier color={progressColor} background={backgroundColor} progress={0} />)
					} else {
						items.push(<Tier color={progressColor} background={backgroundColor} progress={Math.floor((currentTierProgress / currentTierTotal) * 100)} />)
					}
				}
				return items
			})()}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
`

interface TierProps {
	progress: number
	color?: string
	background?: string
}

const Tier = styled.div`
	height: 20px;
	flex: 1;
	&:last-child {
		border-radius: 0 50% 50% 0;
	}
	background: ${(props: TierProps) => {
		if (props.progress === 100) return props.color || "green"
		if (props.progress === 0) return props.background || "grey"
		return `linear-gradient(90deg, ${props.color || "green"}, ${props.progress}%, ${props.background || "grey"}, ${100 - props.progress}%))`
	}};
	margin-left: 5px;
`
