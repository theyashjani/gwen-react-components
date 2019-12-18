import React from "react"
import { WrapperComponent } from "../theme"
import { AchievementData } from "../types/achievement"
import { RewardIcons } from "../types/reward"
import { AchievementBox } from "./box"
import { AchievementModule } from "./module"
import { AchievementTiers } from "./tiers"
import { AchievementTranslation, AchievementTranslations } from "./translations"

interface ModuleProps {
	achievements?: AchievementData[]
	open?: (achievement: AchievementData) => void
	translations?: Partial<AchievementTranslation>
	scale?: number
}

export function AchievementModuleComponent(props: ModuleProps) {
	const { translations, scale, achievements, ...restprops } = props
	return (
		<WrapperComponent themeOptions={{ scale }}>
			{achievements && (
				<AchievementModule {...restprops} achievements={achievements} scale={scale || 1} translations={{ ...AchievementTranslations, ...translations }} />
			)}
		</WrapperComponent>
	)
}

interface BoxProps {
	achievement: AchievementData
	open?: (achievement: AchievementData) => void
	defails?: string
	scale?: number
}

export function AchievementBoxComponent(props: BoxProps) {
	const { scale, ...restprops } = props
	return (
		<WrapperComponent themeOptions={{ scale }}>
			<AchievementBox {...restprops} />
		</WrapperComponent>
	)
}

interface TiersProps {
	achievement: AchievementData
	translations?: Partial<AchievementTranslation>
	rewardIcons?: RewardIcons
	scale?: number
}

export function AchievementTiersComponent(props: TiersProps) {
	const { translations, scale, ...restprops } = props
	return (
		<WrapperComponent themeOptions={{ scale }}>
			<AchievementTiers {...restprops} />
		</WrapperComponent>
	)
}
