import React from "react"
import { styled } from "../../theme"
import { RewardData } from "../../types/level"
import { RewardIcons } from "./icons"

interface Props {
	rewards: RewardData[]
	rewardsTranslation: string
}

export class Rewards extends React.PureComponent<Props> {
	render() {
		return (
			<Wrapper>
				<RewardText>{this.props.rewardsTranslation}:</RewardText>
				<Upgrade>
					{/* eslint-disable react/no-array-index-key */}
					{this.props.rewards.map((reward, key) => React.createElement(RewardIcons[reward.currency], { key, amount: reward.amount, text: "" }))}
				</Upgrade>
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 200px;
	position: absolute;
	bottom: 0;
	width: 100%;
`
const RewardText = styled.div`
	width: 100%;
	text-align: center;
	text-transform: uppercase;
	font-size: 16px;
	line-height: 35px;
	font-weight: 400;
	padding: 0 20px;
	border-top: ${(p) => p.theme.border.default};
	border-bottom: ${(p) => p.theme.border.default};
`
const Upgrade = styled.div`
	height: 135px;
	> div {
		margin: 30px 5px 0;
		display: inline-block;
	}
`
