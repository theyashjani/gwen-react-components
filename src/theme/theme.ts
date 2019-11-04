import { darkTheme } from "./dark"
import { DefaultTheme } from "./default"
import { lightTheme } from "./light"
import { ThemeOptions } from "./options"

export const Theme = new (class Theme implements DefaultTheme {
	fontFamily: string
	colors: DefaultTheme["colors"]
	transition: DefaultTheme["transition"]
	animation: DefaultTheme["animation"]
	boxShadow: DefaultTheme["boxShadow"]
	border: DefaultTheme["border"]

	constructor() {
		const t = darkTheme({})
		this.fontFamily = t.fontFamily
		this.colors = t.colors
		this.transition = t.transition
		this.animation = t.animation
		this.boxShadow = t.boxShadow
		this.border = t.border
	}

	init(options: ThemeOptions) {
		const t = options.theme === "light" ? lightTheme(options) : darkTheme(options)
		this.fontFamily = t.fontFamily
		this.colors = t.colors
		this.transition = t.transition
		this.animation = t.animation
		this.boxShadow = t.boxShadow
		this.border = t.border
	}
})()
