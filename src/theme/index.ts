import styled, { ThemedBaseStyledInterface } from "styled-components"

const styledWrapper: ThemedBaseStyledInterface<ThemeInterface> = styled
export { styledWrapper as styled }

import { ThemeInterface } from "./interface"

export { createGlobalStyle, css, keyframes, ThemeProvider, withTheme } from "styled-components"
export * from "./component"
export * from "./global"
export * from "./interface"
export * from "./options"
/* eslint-disable-next-line no-use-before-define, @typescript-eslint/no-use-before-define */

