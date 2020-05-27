import React from "react"
import styled from "styled-components"
import { StepIcon, StepShape } from "./step-icon"

interface Props {
	currentStepNumber: number
	currentStepProgress: number
	currentStepTotal: number
	maxStep?: number
	icon: StepShape
	progressColor?: string
	backgroundColor?: string
}

export const StepProgressBar = (props: Props) => {
	const { currentStepNumber, currentStepProgress, currentStepTotal, maxStep, progressColor, backgroundColor } = props
	return (
		<Wrapper>
			<IconWrapper>
				<StepIcon step={currentStepNumber} shape={props.icon} />
			</IconWrapper>
			<Steps>
				{(() => {
					if (!maxStep) return <Step color={progressColor} background={backgroundColor} progress={currentStepProgress / currentStepTotal} />
					const items: JSX.Element[] = []
					for (let i = 1; i <= maxStep; i++) {
						if (i < currentStepNumber) {
							items.push(<Step color={progressColor} background={backgroundColor} progress={1} />)
						} else if (i > currentStepNumber) {
							items.push(<Step color={progressColor} background={backgroundColor} progress={0} />)
						} else {
							items.push(<Step color={progressColor} background={backgroundColor} progress={currentStepProgress / currentStepTotal} />)
						}
					}
					return items
				})()}
			</Steps>
		</Wrapper>
	)
}
const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
	align-items: center;
`

const IconWrapper = styled.div`
	position: absolute;
	left: 0;
`

const Steps = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
	align-items: center;
`

interface StepProps {
	progress: number
	color?: string
	background?: string
}

const Step = (props: StepProps) => {
	return (
		<StepWrapper>
			<StepFiller color={props.color || "#0DC979"} flex={props.progress} />
			<StepFiller color={props.color || "#C9C9C9"} flex={1 - props.progress} />
		</StepWrapper>
	)
}

const StepWrapper = styled.div`
	display: flex;
	flex-direction: row;
	overflow: hidden;
	height: 10px;
	flex: 1;
	&:last-child {
		border-radius: 0 3px 3px 0;
	}
	&:first-child {
		margin-left: 10px;
	}
	margin-left: 5px;
`

interface FillProps {
	color: string
	flex: number
}

const StepFiller = styled.div`
	background: ${(props: FillProps) => props.color};
	flex: ${(props: FillProps) => props.flex};
`
