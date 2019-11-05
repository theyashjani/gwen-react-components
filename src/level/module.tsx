import React from "react"
import { ModuleWrapper, ModuleWrapperLeft, ModuleWrapperRight } from "../components/wrapper"
import { LevelAvatarData, LevelData, LevelLog, ModuleLevelUserBehaviorCooldownData } from "../types/level"
import { Profile } from "./profile"
import { Status } from "./status"
import { LevelTranslation } from "./translations"

export interface LevelModuleProps {
	translations: LevelTranslation
	data?: LevelData
	log: LevelLog[]
	avatar?: LevelAvatarData
	cooldowns?: ModuleLevelUserBehaviorCooldownData[]
	selectAvatar?: () => void
}

export function LevelModule(props: LevelModuleProps) {
	return (
		<ModuleWrapper>
			<ModuleWrapperLeft>
				{<Profile data={props.data} translations={props.translations} avatar={props.avatar} selectAvatar={props.selectAvatar} />}
			</ModuleWrapperLeft>
			<ModuleWrapperRight>
				<Status log={props.log} translations={props.translations} cooldowns={props.cooldowns} />
			</ModuleWrapperRight>
		</ModuleWrapper>
	)
}