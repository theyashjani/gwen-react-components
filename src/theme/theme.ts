import { DefaultTheme } from "styled-components"
import { darkTheme } from "./dark"
import { lightTheme } from "./light"
import { ThemeOptions } from "./options"

export const GwenTheme = new (class GwenTheme {
	gwen: DefaultTheme["gwen"]

	constructor() {
		this.gwen = darkTheme({})
	}

	init(options: ThemeOptions) {
		this.gwen = options.theme === "light" ? lightTheme(options) : darkTheme(options)
	}
})()
