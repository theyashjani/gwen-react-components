import { DefaultTheme } from "styled-components"
import { ThemeOptions } from "./options"

export const darkTheme = (options: ThemeOptions): DefaultTheme["gwen"] => ({
	fontFamily: options.fontFamily || "Lato",
	colors: {
		primary: options.primaryColor || "#ff5e5e",
		secondary: options.secondaryColor || "#fff",
		inactive: "#545454",
		success: "#3bdcd1",
		danger: "#ff5e5e",
		info: "#ad7cfc",
		text: {
			primary: "#fff",
			secondary: "#c6c6c6",
			success: "#2a2a2a",
			danger: "#ff5e5e",
		},
		button: {
			default: "linear-gradient(0deg, rgba(56,56,56,1) 0%, rgba(97,97,97,1) 100%)",
			next: "linear-gradient(0deg, rgba(235,235,235,1) 0%, rgba(255,255,255,1) 100%)",
		},
		background: {
			default: "#434343",
			backdrop: "#313131",
			header: "#545454",
			list: "#1b1b1b",
			badge: "#313131",
			podium: "#313131",
		},
		divider: "#313131",
		overlay: "rgba(0,0,0,0.5)",
		shadow: {
			default: (scale: number) => `0 ${2 * scale}px ${5 * scale}px 0 rgba(0, 0, 0, 0.2)`,
			blur: (scale: number) => `${5 * scale}px`,
			spread: "0",
			color: "rgba(0, 0, 0, 0.2)",
		},
		widget: "#1b1b1b",
		timeline: { path: "#bebebe", cleared: "#fff", text: "#545454" },
	},
	transition: {
		duration: 400,
		effect: "ease-in-out",
	},
	animation: {
		default: "4s linear infinite",
	},
	boxShadow: {
		default: (scale: number) => `0 ${2 * scale} ${5 * scale} 0 rgba(0, 0, 0, 0.2)`,
		large: (scale: number) => `0 0 ${10 * scale}px 0 rgba(0, 0, 0, 0.3)`,
		blur: (scale: number) => `${10 * scale}px`,
		spread: "0",
		color: "rgba(0, 0, 0, 0.2)",
	},
	border: {
		default: (scale: number) => `${1 * scale}px solid #313131`,
		textInput: (scale: number) => `${1 * scale}px solid #c6c6c6`,
		width: (scale: number) => `${1 * scale}px`,
		style: "solid",
		color: "#313131",
	},
})
