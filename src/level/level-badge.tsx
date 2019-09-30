import React from "react"
import { LevelIcon01 } from "../icons/level/01"
import { LevelIcon02 } from "../icons/level/02"
import { LevelIcon03 } from "../icons/level/03"
import { LevelIcon04 } from "../icons/level/04"
import { Stars } from "../icons/level/stars"
import { styled } from "../theme"

interface Color {
	name: string
	colors: string[]
}
const badgeColors: Color[] = [
	{
		name: "iron",
		colors: ["#59707b", "#71868f", "#8a9ca4", "#a3b2b9", "bcc8ce"],
	},
	{
		name: "bronze",
		colors: ["#823221", "#95422b", "#a95235", "#bc623f", "#d07349"],
	},
	{
		name: "silver",
		colors: ["#938b87", "#a49d9a", "#b5b0ad", "#c6c2c0", "#d8d5d3"],
	},
	{
		name: "gold",
		colors: ["#b17c43", "#bf904c", "#cea555", "#dcb95e", "#ebce67"],
	},
	{
		name: "titanium",
		colors: ["#1c1c1c", "#252525", "#2e2e2e", "#373737", "#404040"],
	},
]
const badgeSvgs = [LevelIcon01, LevelIcon02, LevelIcon03, LevelIcon04]

export function LevelBadge(props: { level: number }) {
	const colors = props.level <= 100 ? badgeColors[Math.floor(((props.level - 1) / 5) % 5)] : badgeColors[4]
	const stars = ((props.level - 1) % 5) + 1
	let LevelIcon = badgeSvgs[Math.floor((props.level - 1) / 25)]
	LevelIcon = LevelIcon || badgeSvgs[badgeSvgs.length - 1]

	return (
		<Badge stars={stars} badge={colors}>
			<LevelIcon />
			<Stars className="level-stars" style={{ display: "block", position: "absolute", top: "56%", height: "40%" }} />
		</Badge>
	)
}

interface BadgeType {
	stars: number
	badge: Color
}

const Badge = styled.div`
	.badge-iron,
	.badge-bronze,
	.badge-silver,
	.badge-gold,
	.badge-titanium {
		display: none;
	}
	.badge-${(props: BadgeType) => props.badge.name} {
		display: block;
	}
	${(props: BadgeType) =>
		props.badge.colors.map(
			(c, index) => `
		.badge-color-${index + 1}-fill { fill: ${c}; }
		.badge-color-${index + 1}-stroke { stroke: ${c}; }
	`,
		)} .star-1,
	.star-2,
	.star-3,
	.star-4,
	.star-5 {
		display: none;
	}
	div:nth-child(1) {
		height: 160px;
	}
	.level-stars .star-${(props: BadgeType) => props.stars} {
		display: block;
	}
`
