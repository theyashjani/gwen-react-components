import React from "react"
import { TabsWrapper } from "../components/wrapper"
import { LevelData, ModuleLevelUserBehaviorCooldownData } from "../types/level"
import { CooldownLog } from "./cooldown-log"
import { EventLog } from "./event-log"
import { LevelTranslation } from "./translations"

export interface StatusProps {
	translations: LevelTranslation
	log: LevelData["log"]
	cooldowns?: ModuleLevelUserBehaviorCooldownData[]
}

export class Status extends React.PureComponent<StatusProps> {
	render() {
		const { translations, log, cooldowns } = this.props
		return (
			<TabsWrapper
				elements={{
					events: { title: translations.eventLogTitle, content: <EventLog log={log} /> },
					...(this.props.cooldowns ? { cooldown: { title: translations.cooldownLogTitle, content: <CooldownLog cooldowns={cooldowns || []} /> } } : {}),
				}}
			/>
		)
	}
}
