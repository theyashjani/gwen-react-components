import { DefaultTheme } from "styled-components"
import { darkTheme } from "./dark"
import { lightTheme } from "./light"
import { ThemeOptions } from "./options"

/* eslint-disable import/no-mutable-exports */
export let theme: DefaultTheme

export const GwenTheme = (options: ThemeOptions): DefaultTheme => {
	theme = options.theme && options.theme === "dark" ? darkTheme(options) : lightTheme(options)
	return theme
}
