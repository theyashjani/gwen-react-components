/* eslint-disable @typescript-eslint/no-explicit-any */
export const easeInOut = (element: HTMLElement, attribute: string, value: number, duration = 500) => {
	const el = element
	el.style.userSelect = "none"
	const from: number = (el as any)[attribute]
	const sign = checkSign(from - value)
	const diff = sign === 1 ? from - value : from + value

	let scrollCount = 0
	let oldTimestamp: number = performance.now()

	function step(timestamp: number) {
		scrollCount += Math.PI / (duration / (timestamp - oldTimestamp))
		if (scrollCount >= Math.PI) {
			;(el as any)[attribute] = value
		}
		if ((el as any)[attribute] === value) {
			el.style.userSelect = "auto"
			return
		}
		;(el as any)[attribute] = from + ((sign === 1 ? -diff : diff) * scrollCount) / Math.PI
		oldTimestamp = timestamp
		window.requestAnimationFrame(step)
	}

	window.requestAnimationFrame(step)
}

function checkSign(x: number) {
	if (x > 0) {
		return 1
	}
	if (x < 0) {
		return -1
	}
	return 0
}
