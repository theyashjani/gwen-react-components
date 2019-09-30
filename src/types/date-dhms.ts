import { DAY_MS, HOUR_MS, MINUTE_MS, SECOND_MS } from "./clock"

export function dateDHM(milliseconds: number) {
	let ms = Math.abs(milliseconds)
	const d = Math.floor(ms / DAY_MS)
	ms -= d * DAY_MS
	const h = Math.floor(ms / HOUR_MS)
	ms -= h * HOUR_MS
	const m = Math.ceil(ms / MINUTE_MS)

	return [{ key: "d", amount: d }, { key: "h", amount: h }, { key: "m", amount: m }]
		.filter((x) => x.amount)
		.map((x) => `${x.amount}${x.key}`)
		.join(" ")
}

export function dateDHMS(milliseconds: number) {
	let ms = Math.abs(milliseconds)
	const d = Math.floor(ms / DAY_MS)
	ms -= d * DAY_MS
	const h = Math.floor(ms / HOUR_MS)
	ms -= h * HOUR_MS
	const m = Math.floor(ms / MINUTE_MS)
	ms -= m * MINUTE_MS
	const s = Math.ceil(ms / SECOND_MS)

	return [{ key: "d", amount: d }, { key: "h", amount: h }, { key: "m", amount: m }, { key: "s", amount: s }]
		.filter((x) => x.amount)
		.map((x) => `${x.amount}${x.key}`)
		.join(" ")
}
