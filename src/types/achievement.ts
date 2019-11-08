import { RewardData } from "./reward"

export interface AchievementData {
	readonly id: string
	readonly tiers: AchievementTierData[]
	readonly tag?: string
	readonly title: string
	readonly description: string
	readonly icon?: string
}

export interface AchievementTierData {
	readonly title: string
	readonly description: string
	readonly icon?: string
	readonly amount: number
	readonly completed?: Date
	readonly progress: number
	readonly rewards: RewardData[]
}
