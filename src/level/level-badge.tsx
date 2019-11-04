import React from "react"
import styled from "styled-components"
import { LevelIcon01 } from "../icons/level/01"
import { LevelIcon02 } from "../icons/level/02"
import { LevelIcon03 } from "../icons/level/03"
import { LevelIcon04 } from "../icons/level/04"
import { Stars } from "../icons/level/stars"

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

export function LevelBadge(props: { level: number; size: number; text: string }) {
	const colors = props.level <= 100 ? badgeColors[Math.floor(((props.level - 1) / 5) % 5)] : badgeColors[4]
	const stars = ((props.level - 1) % 5) + 1
	let LevelIcon = badgeSvgs[Math.floor((props.level - 1) / 25)]
	LevelIcon = LevelIcon || badgeSvgs[badgeSvgs.length - 1]

	return (
		<Badge stars={stars} badge={colors} size={props.size}>
			<LevelIcon />
			<Stars className="level-stars" style={{ display: "block", position: "absolute", top: "56%", height: "40%" }} />
			<span>{props.text}</span>
			<b data-cy="level-number">{props.level}</b>
		</Badge>
	)
}

interface BadgeType {
	stars: number
	badge: Color
	size: number
}
const Badge = styled.div`
	position: relative;
	height: ${(p: BadgeType) => p.size}px;
	width: ${(p: BadgeType) => p.size}px;
	border-radius: 100%;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	span {
		position: absolute;
		top: 30%;
		width: 100%;
		display: block;
		color: #fff;
		line-height: ${(p: BadgeType) => p.size * 0.05}px;
		font-size: ${(p: BadgeType) => p.size * 0.05}px;
		text-transform: uppercase;
	}
	b {
		position: absolute;
		top: 35%;
		width: 100%;
		display: block;
		color: #fff;
		line-height: ${(p: BadgeType) => p.size * 0.2}px;
		font-size: ${(p: BadgeType) => p.size * 0.2}px;
	}

	.badge-iron,
	.badge-bronze,
	.badge-silver,
	.badge-gold,
	.badge-titanium {
		display: none;
	}
	.badge-${(p: BadgeType) => p.badge.name} {
		display: block;
	}
	${(p: BadgeType) =>
		p.badge.colors.map(
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
	.level-stars .star-${(p: BadgeType) => p.stars} {
		display: block;
	}
`
