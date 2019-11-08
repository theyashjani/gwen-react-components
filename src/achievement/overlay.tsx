import React from "react"
import styled from "styled-components"
import { ProgressBar } from "../components/progress-bar"
import { Rewards } from "../components/reward"
import { Check } from "../icons/check"
import { AchievementData } from "../types/achievement"
import { RewardIcons } from "../types/reward"
import { getAchievementIcon } from "./icon"
import { AchievementTranslation } from "./translations"

interface Props {
	achievement: AchievementData
	translations: AchievementTranslation
	rewardIcons?: RewardIcons
}
interface State {
	active: number
	selected: number
}
export class AchievementOverlay extends React.PureComponent<Props, State> {
	constructor(props: Props) {
		super(props)
		const selected = props.achievement ? props.achievement.tiers.findIndex((a, index) => !a.completed || index === props.achievement.tiers.length - 1) : 0
		this.state = { active: selected, selected }
	}

	render() {
		const { achievement } = this.props
		const { active, selected } = this.state
		const tier = achievement.tiers[selected]
		return (
			<Wrapper>
				<AchievementIcons>
					{this.props.achievement.tiers.map((t, index) => {
						return (
							/* eslint-disable-next-line react/no-array-index-key */
							<IconWrapper key={index} selected={index === selected} greyscale={index > active} onClick={() => this.setState({ selected: index })}>
								<img src={getAchievementIcon(t.icon)} alt="tier-icon" />
							</IconWrapper>
						)
					})}
				</AchievementIcons>

				<ProgressWrapper>
					<ProgressBar completed={tier.progress} amount={tier.amount} />
				</ProgressWrapper>
				<hr />
				<TierTitle>{tier.title}</TierTitle>
				<TierDescription>{tier.description}</TierDescription>
				{tier.completed ? (
					<CompletedWrapper>
						<Outcome>{this.props.translations.done}</Outcome>
						<FlexCenter>
							<AchievementCheck data-cy="achievement-overlay-checkmark">
								<Checkmark />
							</AchievementCheck>
						</FlexCenter>
					</CompletedWrapper>
				) : (
					<Rewards rewards={tier.rewards} rewardsTranslation={this.props.translations.rewards} icons={this.props.rewardIcons} />
				)}
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	text-align: center;
	position: relative;
	height: 100%;
	background: ${(p) => p.theme.gwen.colors.background.default};
	> hr {
		margin: ${(p) => p.theme.proportions(10)}px 0;
	}
`
const AchievementIcons = styled.div`
	text-align: center;
	padding: ${(p) => p.theme.proportions(25)}px ${(p) => p.theme.proportions(15)}px ${(p) => p.theme.proportions(15)}px ${(p) => p.theme.proportions(15)}px;
	display: flex;
`
interface IconWrapperProps {
	selected: boolean
	greyscale: boolean
}
const IconWrapper = styled.div`
	flex: ${(p: IconWrapperProps) => (p.selected ? 2 : 1)};
	${(p: IconWrapperProps) => (p.greyscale ? "filter: grayscale(100%);" : "")}
	transition: 0.3s ease-in-out;
	border-right: ${(p) => p.theme.gwen.border.default};
	:last-child {
		border-right: none;
	}
	img {
		display: inline-block;
		height: ${(p) => p.theme.proportions(80)}px;
		max-width: 100%;
		object-fit: contain;
		transition: 0.3s ease-in-out;
		padding: ${(p: IconWrapperProps) => (p.selected ? 0 : 10)}px;
	}
	&:hover {
		cursor: pointer;
	}
`
const ProgressWrapper = styled.div`
	padding: ${(p) => p.theme.proportions(10)}px ${(p) => p.theme.proportions(20)}px;
`

const TierTitle = styled.div`
	width: 100%;
	line-height: ${(p) => p.theme.proportions(20)}px;
	padding: ${(p) => p.theme.proportions(5)}px ${(p) => p.theme.proportions(20)}px;
	color: ${(p) => p.theme.gwen.colors.text.primary};
	font-size: ${(p) => p.theme.proportions(18)}px;
`

const TierDescription = styled(TierTitle)`
	font-size: ${(p) => p.theme.proportions(15)}px;
`
const AchievementCheck = styled.div`
	width: ${(p) => p.theme.proportions(100)}px;
	height: ${(p) => p.theme.proportions(100)}px;
	background: ${(p) => p.theme.gwen.colors.background.header};
	padding: 3%;
	margin-top: 5%;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: ${(p) => p.theme.gwen.boxShadow.default};
	img {
		width: 100%;
		height: auto;
	}
`
const FlexCenter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
const Outcome = styled.div`
	text-transform: uppercase;
	font-size: ${(p) => p.theme.proportions(16)}px;
	line-height: ${(p) => p.theme.proportions(35)}px;
	font-weight: 400;
	padding: 0 ${(p) => p.theme.proportions(20)}px;
	border-top: ${(p) => p.theme.gwen.border.default};
	border-bottom: ${(p) => p.theme.gwen.border.default};
`
const CompletedWrapper = styled.div`
	height: ${(p) => p.theme.proportions(180)}px;
	position: absolute;
	bottom: 0;
	width: 100%;
`

const Checkmark = styled(Check)`
	path {
		fill: ${(p) => p.theme.gwen.colors.success};
	}
`
