import React from "react"
import { WrapperComponent } from "../theme"
import { MissionThemeData } from "../types/mission"
import { MissionMap } from "./map"

/* interface Props {
	data?: MissionData
	avatar?: LevelAvatarData
	log: LevelLog[]
	cooldowns?: ModuleLevelUserBehaviorCooldownData[]
	selectAvatar?: () => void
	translations?: Partial<LevelTranslation>
	scale?: number
}

export function MissionModuleComponent(props: Props & { rewardIcons: RewardIcons }) {
	const { translations, scale, ...restprops } = props
	return (
		<WrapperComponent scale={scale}>
			<LevelModule {...restprops} scale={scale || 1} translations={{ ...LevelTranslations, ...translations } as LevelTranslation} />
		</WrapperComponent>
	)
} */

type MissionMapComponentProps = {
	current?: number
	themes: MissionThemeData[]
	select?: (mission: number) => void
}

export function MissionMapComponent(props: MissionMapComponentProps) {
	return (
		<WrapperComponent>
			<MissionMap {...props} />
		</WrapperComponent>
	)
}
