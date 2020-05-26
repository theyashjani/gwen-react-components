import React from "react"
import styled from "styled-components"
import { StepIcon, StepShape } from "./step-icon"

export type ProgressCircleProps = {
	step: number
	progress: number
	avatar: string
	shape?: StepShape
	stroke?: { primary: string; background?: string }
} & React.HTMLAttributes<HTMLDivElement>

export class ProgressCircle extends React.PureComponent<ProgressCircleProps> {
	private MISSING = 0.06
	private RADIUS = 47.5
	/* eslint-disable-next-line react/static-property-placement */
	static defaultProps: Partial<ProgressCircleProps> = {
		shape: "circle",
		stroke: { primary: "#5cc580" },
	}

	private perimeter(radius: number) {
		return Math.round(Math.PI * radius * 2)
	}

	render() {
		const { step, progress, avatar, shape, stroke, ...wrapperProps } = this.props as Required<ProgressCircleProps>
		return (
			<Wrapper {...wrapperProps}>
				<ProgressMeter viewBox="-50 -50 100 100">
					<circle r={this.RADIUS} fill="none" strokeWidth="5" stroke={stroke?.background} />
					<circle
						transform={`rotate(${90 + this.MISSING * 180})`}
						r={this.RADIUS}
						strokeWidth="5"
						stroke={stroke?.primary}
						fill="none"
						strokeLinecap="round"
						strokeDasharray={this.perimeter(this.RADIUS)}
						strokeDashoffset={this.perimeter(this.RADIUS) - progress * (1 - this.MISSING) * this.perimeter(this.RADIUS)}
						style={{ transition: `stroke-dashoffset 1s ease-in-out` }}
					/>
				</ProgressMeter>
				<ProgressImage src={avatar} alt="avatar" />
				<StepWrapper>
					<StepIcon step={step} shape={shape} />
				</StepWrapper>
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	position: relative;
	padding-bottom: 12.5px;
`
const ProgressMeter = styled.svg`
	display: block;
	width: 100%;
`
const ProgressImage = styled.img`
	position: absolute;
	top: 15%;
	left: 15%;
	display: block;
	width: 70%;
	height: 70%;
	object-fit: contain;
	border-radius: 20%;
	overflow: hidden;
`
const StepWrapper = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	width: 100%;
	bottom: 0px;
`
