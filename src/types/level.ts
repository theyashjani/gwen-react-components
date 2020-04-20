import { RewardData } from "./reward"

export interface LevelAvatarData {
	readonly id: string
	readonly url: string
	readonly colors: {
		readonly background: string
		readonly shirt: string
	}
}

export interface LevelLog {
	type: ActionType
	xp: number
	date: Date
	text: string
}

export type ActionType = string

export enum ModuleEnum {
	"tutorial",
	"mission",
	"level",
	"shop",
	"leaderboard",
	"achievement",
	"challenge",
	"survey",
	"selfreporting",
}

export type ModuleType = keyof typeof ModuleEnum

export interface ModuleLevelUserBehaviorCooldownData {
	readonly behaviorName: string
	readonly cooldownInMS: number
	readonly lastReportedAt: Date
}

export type LevelData = {
	currentLevel: number
	xpGainedOnCurrentLevel: number
	xpRemainingOnCurrentLevel: number
	xpGainedAllTime: number
	rewardsOnNextLevelUp: RewardData[]
	avatar?: LevelAvatarData
}
