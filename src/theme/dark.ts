import { DefaultTheme } from "./default"
import { ThemeOptions } from "./options"

export const darkTheme = (options: ThemeOptions): DefaultTheme => ({
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
			default: "0 2px 5px 0 rgba(0, 0, 0, 0.2)",
			blur: "5px",
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
		default: "0 2px 5px 0 rgba(0, 0, 0, 0.2)",
		large: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
		blur: "10px",
		spread: "0",
		color: "rgba(0, 0, 0, 0.2)",
	},
	border: {
		default: "1px solid #313131",
		textInput: "1px solid #c6c6c6",
		width: "1px",
		style: "solid",
		color: "#313131",
	},
})
