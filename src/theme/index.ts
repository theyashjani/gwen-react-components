import styled, { ThemedBaseStyledInterface } from "styled-components"
import { ThemeInterface } from "./interface"

const styledWrapper: ThemedBaseStyledInterface<ThemeInterface> = styled
export { createGlobalStyle, css, keyframes, ThemeProvider, withTheme } from "styled-components"
export * from "./component"
export * from "./global"
export * from "./interface"
export * from "./options"
export { styledWrapper as styled }
