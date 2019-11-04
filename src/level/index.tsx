import React from "react"
import { WrapperComponent } from "../theme"
import { LevelAvatarData, LevelData, LevelLog, ModuleLevelUserBehaviorCooldownData } from "../types/level"
import { LevelBadge } from "./level-badge"
import { LevelCircle } from "./level-circle"
import { LevelModule } from "./module"
import { SelectAvatar } from "./select-avatar"
import { Status } from "./status"
import { LevelTranslation, LevelTranslations } from "./translations"

interface Props {
	data?: LevelData
	avatar?: LevelAvatarData
	log: LevelLog[]
	cooldowns?: ModuleLevelUserBehaviorCooldownData[]
	selectAvatar?: () => void
	translations?: Partial<LevelTranslation>
}

export function LevelModuleComponent(props: Props) {
	const { translations, ...restprops } = props
	return (
		<WrapperComponent>
			<LevelModule {...restprops} translations={{ ...LevelTranslations, ...translations } as LevelTranslation} />
		</WrapperComponent>
	)
}

export function LevelProfileComponent(props: Omit<Props, "cooldowns" | "log"> & { badge?: boolean }) {
	const { translations, ...restprops } = props
	return (
		<WrapperComponent>
			<LevelCircle size={160} {...restprops} translations={{ ...LevelTranslations, ...translations } as LevelTranslation} />
		</WrapperComponent>
	)
}

export function LevelStatusComponent(props: Omit<Props, "data" | "selectAvatar">) {
	const { translations, ...restprops } = props
	return (
		<WrapperComponent>
			<Status {...restprops} translations={{ ...LevelTranslations, ...translations } as LevelTranslation} />
		</WrapperComponent>
	)
}

export interface LevelSelectAvatarProps {
	current?: string
	select: (avatar: LevelAvatarData) => void
	closeModal: () => void
	avatars: LevelAvatarData[]
}

export function LevelSelectAvatarComponent(props: LevelSelectAvatarProps) {
	const { ...restprops } = props
	return (
		<WrapperComponent>
			<SelectAvatar {...restprops} />
		</WrapperComponent>
	)
}

export function LevelBadgeComponent(props: { level: number; text?: string }) {
	return (
		<WrapperComponent>
			<LevelBadge level={props.level} size={160} text={props.text || LevelTranslations.level} />
		</WrapperComponent>
	)
}
