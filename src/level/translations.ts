import { GenericTranslation, GenericTranslations } from "../components/translations"

export interface LevelTranslation extends GenericTranslation {
	level: string
	selectAvatar: string
	eventLogTitle: string
	xpUntilNextLevel: string
	cooldownLogTitle: string
}

export const LevelTranslations: LevelTranslation = {
	...GenericTranslations,
	level: "Level",
	selectAvatar: "Select Avatar",
	eventLogTitle: "Event Log",
	xpUntilNextLevel: "Xp Until Next Level",
	cooldownLogTitle: "Cooldowns",
}
