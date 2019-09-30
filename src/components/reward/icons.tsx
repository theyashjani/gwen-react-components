import React from "react"
import { LevelIcon } from "../../icons/level"
import { ShopIcon } from "../../icons/shop"
import { Currency } from "../../types/level"
import { RewardWrapper } from "./wrapper"

interface Props {
	amount?: number
	size?: number
	text: string
}

export function Xp(props: Props) {
	return <RewardWrapper {...props} description={props.text} icon={<LevelIcon />} background="linear-gradient(45deg, #ad75ff 0%, #3bdcd1 100%);" />
}

export function Coin(props: Props) {
	return (
		<RewardWrapper
			{...props}
			description={props.text}
			icon={<ShopIcon color="#9a6e24" />}
			background="linear-gradient(135deg, #cc9424 0%,#ffe690 50%,#cc9424 100%);"
		/>
	)
}

export function VipCurrency(props: Props) {
	return (
		<RewardWrapper
			{...props}
			description={props.text}
			icon={<ShopIcon color="#1ea198" />}
			background="linear-gradient(135deg, #5de3da 0%,#c8fcf9 50%,#5de3da 100%);"
		/>
	)
}

export const RewardIcons: Record<Currency, (props: Props) => JSX.Element> = {
	xp: Xp,
	coin: Coin,
	vipcurrency: VipCurrency,
}
