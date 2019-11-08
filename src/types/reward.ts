export interface RewardData {
	readonly currency: Currency
	readonly amount: number
}

export enum CurrencyEnum {
	"xp",
	"coin",
	"vipcurrency",
}

export type Currency = keyof typeof CurrencyEnum

export type RewardIcons = Partial<Record<Currency, string>>
