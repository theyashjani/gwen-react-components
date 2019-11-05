import React from "react"
import styled from "styled-components"
import { RewardData } from "../../types/level"
import { RewardIcons } from "./icons"

interface Props {
	rewards: RewardData[]
	rewardsTranslation: string
	size?: number
}

export class Rewards extends React.PureComponent<Props> {
	render() {
		return (
			<Wrapper>
				<RewardText>{this.props.rewardsTranslation}:</RewardText>
				<Upgrade>
					{/* eslint-disable react/no-array-index-key */}
					{this.props.rewards.map((reward, key) =>
						React.createElement(RewardIcons[reward.currency], { key, size: this.props.size, amount: reward.amount, text: "" }),
					)}
				</Upgrade>
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: ${(p) => p.theme.proportions(200)}px;
	position: absolute;
	bottom: 0;
	width: 100%;
`
const RewardText = styled.div`
	width: 100%;
	text-align: center;
	text-transform: uppercase;
	font-size: ${(p) => p.theme.proportions(16)}px;
	line-height: ${(p) => p.theme.proportions(35)}px;
	font-weight: 400;
	padding: 0 ${(p) => p.theme.proportions(20)}px;
	border-top: ${(p) => p.theme.gwen.border.default};
	border-bottom: ${(p) => p.theme.gwen.border.default};
`
const Upgrade = styled.div`
	height: ${(p) => p.theme.proportions(135)}px;
	> div {
		margin: ${(p) => p.theme.proportions(30)}px ${(p) => p.theme.proportions(5)}px 0;
		display: inline-block;
	}
`
