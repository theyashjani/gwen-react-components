import { ObjectiveData } from "./objective"
import { RewardData } from "./reward"

export interface MissionData {
	completed: boolean
	readonly missionNumber: number
	reward: number
	readonly rewards: RewardData[]

	objectives: ObjectiveData[]
}

export interface MissionThemeData {
	readonly id: string
	readonly backgroundTileUrl: string
	readonly transitionTileUrl: string
	readonly foregroundTiles: Array<{
		readonly url: string
		readonly size: number
	}>
}
