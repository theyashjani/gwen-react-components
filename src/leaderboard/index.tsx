import React from "react"
import { WrapperComponent } from "../theme"
import { LeaderboardRow } from "../types/leaderboard"
import { LeaderboardList } from "./list"
import { LeaderboardTranslation, LeaderboardTranslations } from "./translations"

type LeaderboardProps = {
	leaderboard: LeaderboardRow[]
	translations: Partial<LeaderboardTranslation>
}

export function LeaderboardListComponent(props: LeaderboardProps) {
	const { translations, ...restprops } = props
	return (
		<WrapperComponent>
			<LeaderboardList {...restprops} translations={{ ...LeaderboardTranslations, ...translations } as LeaderboardTranslation} />
		</WrapperComponent>
	)
}

type LeaderboardModuleProps = {}

export function LeaderboardModuleComponent(props: LeaderboardModuleProps) {}
