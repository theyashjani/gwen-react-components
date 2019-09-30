import React from "react"
import { Edit } from "../icons/edit"
import { styled, ThemeInterface, withTheme } from "../theme"
import { LevelAvatarData, LevelData } from "../types/level"
import { LevelBadge } from "./level-badge"
import { LevelTranslation } from "./translations"

type Props = {
	translations: LevelTranslation
	data: LevelData
	theme: ThemeInterface
	size: number
	avatar?: LevelAvatarData
	selectAvatar?: () => void
}
interface State {
	circleTransition?: "full" | "empty"
}
export class LevelCircleComponent extends React.PureComponent<Props, State> {
	state: State = { circleTransition: undefined }

	UNSAFE_componentWillReceiveProps(nextProps: Readonly<Props>) {
		if (nextProps.data.levelUp && !this.props.data.levelUp) {
			this.setState({ circleTransition: "full" })
			setTimeout(() => this.setState({ circleTransition: "empty" }), 1000)
			setTimeout(() => this.setState({ circleTransition: undefined }), 2000)
		}
	}

	private perimeter(radius: number) {
		return Math.round(Math.PI * radius * 2)
	}

	progress() {
		const { level, currentXp, levelXp } = this.props.data
		return level && level > 0 ? (currentXp / levelXp) * 100 : 0
	}

	render() {
		const { translations, theme } = this.props
		const radius = 40
		const missing = 0.12
		let progress = this.progress() / 100
		if (this.state.circleTransition) {
			progress = this.state.circleTransition === "full" ? 1 : 0
		}
		return (
			<LevelCircleWrapper size={this.props.size}>
				<LevelMeter width={`${this.props.size}px`} height={`${this.props.size}px`} viewBox="-50 -50 100 100">
					<defs>
						<linearGradient id="gradient" gradientTransform="rotate(45)">
							<stop offset="0%" stopColor={this.props.avatar && this.props.avatar.colors ? this.props.avatar.colors.shirt : theme.colors.text.primary} />
							<stop offset="100%" stopColor={this.props.avatar && this.props.avatar.colors ? this.props.avatar.colors.background : theme.colors.text.primary} />
						</linearGradient>
					</defs>
					<circle r={radius} fill="none" strokeWidth="20" stroke={theme.colors.inactive} />
					<circle
						transform={`rotate(${180 + missing * 180})`}
						r={radius}
						strokeWidth="20"
						stroke="url(#gradient)"
						fill="none"
						strokeDasharray={this.perimeter(radius)}
						strokeDashoffset={this.perimeter(radius) - progress * (1 - missing) * this.perimeter(radius)}
						style={{ transition: `stroke-dashoffset ${this.state.circleTransition !== "empty" ? 1 : 0}s ease-in-out` }}
					/>
				</LevelMeter>
				<LevelPicture size={this.props.size} src={this.props.avatar && this.props.avatar.url} />
				<Level size={this.props.size}>
					<span>{translations.level}</span>
					<b data-cy="level-number">{this.props.data.level}</b>
					{this.props.data.level && <LevelBadge level={this.props.data.level} />}
				</Level>
				{this.props.selectAvatar && (
					<EditButton size={this.props.size} onClick={() => this.props.selectAvatar && this.props.selectAvatar()}>
						<Edit />
					</EditButton>
				)}
			</LevelCircleWrapper>
		)
	}
}

export const LevelCircle = withTheme(LevelCircleComponent)

interface SizeType {
	theme: ThemeInterface
	size: number
}
const LevelCircleWrapper = styled.div`
	margin: auto;
	position: relative;
	border-radius: 100%;
	width: ${(props: SizeType) => props.size}px;
	height: ${(props: SizeType) => props.size}px;
	z-index: 10;
	margin-bottom: ${(props: SizeType) => props.size * 0.1}px;
`
const LevelPicture = styled.img`
	position: absolute;
	top: ${(props: SizeType) => props.size * 0.1}px;
	left: ${(props: SizeType) => props.size * 0.1}px;
	display: block;
	width: ${(props: SizeType) => props.size * 0.8}px;
	height: ${(props: SizeType) => props.size * 0.8}px;
	border-radius: 100%;
	border: ${(props: SizeType) => `${props.size * 0.05}px solid ${props.theme.colors.background.badge}`};
	box-shadow: ${(props: SizeType) => props.theme.boxShadow.large};
	overflow: hidden;
`
const LevelMeter = styled.svg`
	display: block;
	position: relative;
	top: 0;
	left: 0;
	padding: 0;
	transform: rotateZ(-90deg);
`

const Level = styled.div`
	position: absolute;
	z-index: 1;
	top: 50%;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 100%;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	span {
		display: block;
		color: #fff;
		line-height: ${(props: SizeType) => props.size * 0.05}px;
		font-size: ${(props: SizeType) => props.size * 0.05}px;
		text-transform: uppercase;
	}
	b {
		display: block;
		color: #fff;
		line-height: ${(props: SizeType) => props.size * 0.2}px;
		font-size: ${(props: SizeType) => props.size * 0.2}px;
	}
	> div {
		position: absolute;
		top: 8%;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
`
const EditButton = styled.div`
	position: absolute;
	top: -${(props: SizeType) => props.size * 0.1}px;
	right: -${(props: SizeType) => props.size * 0.19}px;
	cursor: pointer;
	padding: ${(props: SizeType) => props.size * 0.03}px ${(props: SizeType) => props.size * 0.03}px ${(props: SizeType) => props.size * 0.04}px
		${(props: SizeType) => props.size * 0.04}px;
	height: ${(props: SizeType) => props.size * 0.19}px;
	width: ${(props: SizeType) => props.size * 0.19}px;
	border-radius: 100%;
	background: ${(props: SizeType) => props.theme.colors.background.header};
	box-shadow: ${(props: SizeType) => props.size * 0.0125}px 0 ${(props: SizeType) => props.size * 0.03}px 0 ${(props: SizeType) => props.theme.boxShadow.color};

	> svg {
		stroke: ${(props: SizeType) => props.theme.colors.text.secondary};
		fill: ${(props: SizeType) => props.theme.colors.text.secondary};
	}
	&:hover {
		background: ${(props: SizeType) => props.theme.colors.text.primary};
		> svg {
			stroke: ${(props: SizeType) => props.theme.colors.text.success};
			fill: ${(props: SizeType) => props.theme.colors.text.success};
		}
	}
`
