import React from "react"
import { WrapperComponent } from "../theme"
import { AchievementData } from "../types/achievement"
import { RewardIcons } from "../types/reward"
import { AchievementBox } from "./box"
import { AchievementModule } from "./module"
import { AchievementOverlay } from "./overlay"
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
		<WrapperComponent scale={scale}>
			{achievements && (
				<AchievementModule
					{...restprops}
					achievements={achievements}
					scale={scale || 1}
					translations={{ ...AchievementTranslations, ...translations } as AchievementTranslation}
				/>
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
		<WrapperComponent scale={scale}>
			<AchievementBox {...restprops} />
		</WrapperComponent>
	)
}

interface OverlayProps {
	achievement: AchievementData
	translations?: Partial<AchievementTranslation>
	rewardIcons?: RewardIcons
	scale?: number
}

export function AchievementOverlayComponent(props: OverlayProps) {
	const { translations, scale, ...restprops } = props
	return (
		<WrapperComponent scale={scale}>
			<AchievementOverlay {...restprops} translations={{ ...AchievementTranslations, ...translations } as AchievementTranslation} />
		</WrapperComponent>
	)
}
