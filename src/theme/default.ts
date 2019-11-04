export interface DefaultTheme {
	fontFamily: string
	colors: {
		primary: string
		secondary: string
		inactive: string
		success: string
		danger: string
		info: string
		text: { primary: string; secondary: string; success: string; danger: string }
		background: { default: string; backdrop: string; header: string; list: string; badge: string; podium: string }
		divider: string
		overlay: string
		shadow: { default: string; blur: string; spread: string; color: string }
		widget: string
		timeline: { path: string; cleared: string; text: string }
	}
	transition: {
		duration: number
		effect: string
	}
	animation: {
		default: string
	}
	boxShadow: {
		default: string
		large: string
		blur: string
		spread: string
		color: string
	}
	border: {
		default: string
		textInput: string
		width: string
		style: string
		color: string
	}
}
