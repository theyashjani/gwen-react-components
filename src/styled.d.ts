// import original module declarations
import "styled-components"

// and extend them!
declare module "styled-components" {
	export interface DefaultTheme {
		proportions: (times: number, scale?: number) => number
		scale: number
		gwen: {
			fontFamily: string
			colors: {
				primary: string
				secondary: string
				inactive: string
				success: string
				danger: string
				info: string
				text: { primary: string; secondary: string; success: string; danger: string }
				button: { default: string; next: string }
				background: { default: string; backdrop: string; header: string; list: string; badge: string; podium: string }
				divider: string
				overlay: string
				shadow: { default: (scale: number) => string; blur: (scale: number) => string; spread: string; color: string }
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
				default: (scale: number) => string
				large: (scale: number) => string
				blur: (scale: number) => string
				spread: string
				color: string
			}
			border: {
				default: (scale: number) => string
				textInput: (scale: number) => string
				width: (scale: number) => string
				style: string
				color: string
			}
		}
	}
}
