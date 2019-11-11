import React from "react"
import { WrapperComponent } from "../theme"
import { Objective, ObjectiveProps } from "./objective"

export function ObjectiveComponent(props: ObjectiveProps) {
	return (
		<WrapperComponent>
			<Objective {...props} />
		</WrapperComponent>
	)
}
