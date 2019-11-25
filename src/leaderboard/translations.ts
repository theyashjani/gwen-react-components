import { GenericTranslation, GenericTranslations } from "../components/translations"

export interface LeaderboardTranslation extends GenericTranslation {
	moduleName: string
	noHighscore: string
	nickname: string
	score: string
	myScore: string
	anonymous: string
	alltime: string
	weekly: string
}

export const LeaderboardTranslations: LeaderboardTranslation = {
	...GenericTranslations,
	moduleName: "Leaderboard",
	noHighscore: "No Highscore",
	nickname: "Nickname",
	score: "Score",
	myScore: "My Score",
	anonymous: "Anonymous",
	alltime: "All Time",
	weekly: "Weekly",
}
