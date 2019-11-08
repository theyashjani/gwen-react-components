export function getAchievementIcon(icon?: string) {
	if (!icon) {
		return `https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg`
	}
	if (/^https?:\/\//.test(icon)) {
		return icon
	}
	return `https://gwen.insertcoin.se/widget/images/action-icons/${icon}.svg`
}
