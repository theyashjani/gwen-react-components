import React from "react"
import { WrapperComponent } from "../theme"
import { MissionThemeData } from "../types/mission"
import { MissionMap } from "./map"

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
