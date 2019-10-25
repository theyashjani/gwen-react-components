import React, { PureComponent } from "react"
import styled from "styled-components"
import { SECOND_MS } from "../types/clock"
import { dateDHMS } from "../types/date-dhms"
import { ModuleLevelUserBehaviorCooldownData } from "../types/level"

interface Props {
	data: ModuleLevelUserBehaviorCooldownData
	onTimeout: (behaviorName: string) => void
}

interface State {
	cooldown: number
}

export class CooldownLogItem extends PureComponent<Props, State> {
	state: State = {
		cooldown: this.props.data.cooldownInMS - Date.now() + new Date(this.props.data.lastReportedAt).getTime(),
	}

	interval: number

	constructor(props: Props) {
		super(props)

		this.interval = setInterval(() => {
			const cooldown = props.data.cooldownInMS - Date.now() + new Date(props.data.lastReportedAt).getTime()
			if (cooldown <= 0) {
				clearInterval(this.interval)
				this.props.onTimeout(props.data.behaviorName)
			} else {
				this.setState({ cooldown })
			}
		}, SECOND_MS)
	}

	UNSAFE_componentWillReceiveProps(props: Props) {
		clearInterval(this.interval)
		this.interval = setInterval(() => {
			const cooldown = props.data.cooldownInMS - Date.now() + new Date(props.data.lastReportedAt).getTime()
			if (cooldown <= 0) {
				clearInterval(this.interval)
				this.props.onTimeout(props.data.behaviorName)
			} else {
				this.setState({ cooldown })
			}
		}, SECOND_MS)
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	render() {
		return (
			<CooldownLogWrapper>
				<CooldownTitle>{this.props.data.behaviorName}</CooldownTitle>
				<CooldownTime>{dateDHMS(this.state.cooldown)}</CooldownTime>
			</CooldownLogWrapper>
		)
	}
}

const CooldownLogWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	background: ${(p) => p.theme.colors.background.header};
	margin: 10px;
	padding: 8px 12px;
	box-shadow: ${(p) => p.theme.boxShadow.default};
`

const CooldownTitle = styled.div`
	font-size: 15px;
	font-weight: bold;
`

const CooldownTime = styled.div`
	color: ${(p) => p.theme.colors.text.secondary};
`
