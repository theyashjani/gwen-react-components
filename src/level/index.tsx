import React from "react"
import { ThemeComponent, ThemeOptions } from "../theme"
import { LevelAvatarData, LevelData, ModuleLevelUserBehaviorCooldownData } from "../types/level"
import { LevelModule } from "./module"
import { Profile } from "./profile"
import { SelectAvatar } from "./select-avatar"
import { Status } from "./status"
import { LevelTranslation, LevelTranslations } from "./translations"

interface Props {
	theme: ThemeOptions
	translations?: Partial<LevelTranslation>
	data: LevelData
	avatar?: LevelAvatarData
	cooldowns?: ModuleLevelUserBehaviorCooldownData[]
	selectAvatar?: () => void
}

export function LevelModuleComponent(props: Props) {
	const { theme, translations, ...restprops } = props
	return (
		<ThemeComponent options={theme}>
			<LevelModule {...restprops} translations={{ ...LevelTranslations, ...translations } as LevelTranslation} />
		</ThemeComponent>
	)
}

export function LevelProfileComponent(props: Omit<Props, "cooldowns">) {
	const { theme, translations, ...restprops } = props
	return (
		<ThemeComponent options={theme}>
			<Profile {...restprops} translations={{ ...LevelTranslations, ...translations } as LevelTranslation} />
		</ThemeComponent>
	)
}

export function LevelStatusComponent(props: Omit<Props, "data" | "selectAvatar"> & { log: LevelData["log"] }) {
	const { theme, translations, ...restprops } = props
	return (
		<ThemeComponent options={theme}>
			<Status {...restprops} translations={{ ...LevelTranslations, ...translations } as LevelTranslation} />
		</ThemeComponent>
	)
}

export interface LevelSelectAvatarProps {
	theme: ThemeOptions
	current?: string
	select: (avatar: LevelAvatarData) => void
	closeModal: () => void
	avatars: LevelAvatarData[]
}

export function LevelSelectAvatarComponent(props: LevelSelectAvatarProps) {
	const { theme, ...restprops } = props
	return (
		<ThemeComponent options={theme}>
			<SelectAvatar {...restprops} />
		</ThemeComponent>
	)
}
