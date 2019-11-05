import { DefaultTheme } from "styled-components"
import { ThemeOptions } from "./options"

export const lightTheme = (options: ThemeOptions): DefaultTheme["gwen"] => ({
	fontFamily: options.fontFamily || "Lato",
	colors: {
		primary: options.primaryColor || "#ff5e5e",
		secondary: options.secondaryColor || "#545454",
		inactive: "#d7d7d7",
		success: "#3bdcd1",
		danger: "#ff5e5e",
		info: "#ad7cfc",
		text: {
			primary: "#545454",
			secondary: "#7c7c7c",
			success: "#fff",
			danger: "#ff5e5e",
		},
		background: {
			default: "#f3f3f3",
			backdrop: "#d7d7d7",
			header: "#fff",
			list: "#cbcbcb",
			badge: "#fff",
			podium: "#545454",
		},
		divider: "#d7d7d7",
		overlay: "rgba(0,0,0,0.5)",
		shadow: {
			default: "0 2px 5px 0 rgba(0, 0, 0, 0.2)",
			blur: "5px",
			spread: "0",
			color: "rgba(0, 0, 0, 0.2)",
		},
		widget: "#ffffff",
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
		default: "0 2px 5px 0 rgba(0, 0, 0, 0.2)",
		large: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
		blur: "10px",
		spread: "0",
		color: "rgba(0, 0, 0, 0.2)",
	},
	border: {
		default: "1px solid #d7d7d7",
		textInput: "1px solid #7c7c7c",
		width: `1px`,
		style: "solid",
		color: "#ddd",
	},
})
