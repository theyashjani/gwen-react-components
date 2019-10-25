/* eslint-disable max-classes-per-file, react/no-multi-comp */
import React from "react"
import styled, { DefaultTheme } from "styled-components"

interface ModuleWrapperProps {
	title?: JSX.Element
	style?: React.CSSProperties
}

export function ModuleWrapper(props: { children: JSX.Element | JSX.Element[] }) {
	return <ModuleWrapperOuter {...props} />
}

export class ModuleWrapperFull extends React.PureComponent<ModuleWrapperProps> {
	render() {
		return (
			<ModuleWrapperFullDiv>
				{this.props.title && <WrapperTitle data-cy="module-wrapper-full-title">{this.props.title}</WrapperTitle>}
				{!!this.props.children && this.props.children}
			</ModuleWrapperFullDiv>
		)
	}
}

export class ModuleWrapperLeft extends React.PureComponent<ModuleWrapperProps> {
	render() {
		return (
			<ModuleWrapperLeftDiv>
				{this.props.title && <WrapperTitle data-cy="mission-number">{this.props.title}</WrapperTitle>}
				{!!this.props.children && this.props.children}
			</ModuleWrapperLeftDiv>
		)
	}
}

export class ModuleWrapperRight extends React.PureComponent<ModuleWrapperProps> {
	render() {
		return (
			<ModuleWrapperRightDiv style={this.props.style}>
				{this.props.title && <WrapperTitle>{this.props.title}</WrapperTitle>}
				{!!this.props.children && this.props.children}
			</ModuleWrapperRightDiv>
		)
	}
}

interface TabsWrapperState {
	active: string
}

interface TabsWrapperProps {
	elements: { [name: string]: { title: string; content: JSX.Element } }
	defaultActive?: string
}

export class TabsWrapper extends React.PureComponent<TabsWrapperProps> {
	state: TabsWrapperState = {
		active: this.props.defaultActive || Object.keys(this.props.elements)[0],
	}

	render() {
		const { elements } = this.props
		const { active } = this.state
		return (
			<TabsWrapperDiv>
				<TabsWrapperHeaderDiv>
					{Object.keys(elements).map((key) => (
						<Tab key={key} active={active === key} onClick={() => this.setState({ active: key })}>
							{elements[key].title}
						</Tab>
					))}
				</TabsWrapperHeaderDiv>
				<TabsWrapperElements>{elements[active].content}</TabsWrapperElements>
			</TabsWrapperDiv>
		)
	}
}

const ModuleWrapperOuter = styled.div`
	display: flex;
	height: 100%;
	padding: 1%;
	background: ${(p) => p.theme.colors.background.backdrop};
`

const ModuleWrapperFullDiv = styled.div`
	position: relative;
	margin-right: 0.5%;
	height: 100%;
	width: 100%;
	background: ${(p) => p.theme.colors.background.default};
	overflow: hidden;
`
const ModuleWrapperLeftDiv = styled.div`
	position: relative;
	height: 100%;
	flex: 1;
	margin-right: 0.5%;
	background: ${(p) => p.theme.colors.background.default};
	overflow: hidden;
`
const ModuleWrapperRightDiv = styled.div`
	position: relative;
	height: 100%;
	flex: 1;
	margin-left: 0.5%;
	background: ${(p) => p.theme.colors.background.default};
	overflow: hidden;
`

const WrapperTitle = styled.div`
	background: ${(p) => p.theme.colors.background.header};
	line-height: 55px;
	font-size: 20px;
	text-align: center;
	font-weight: bold;
	border-bottom: ${(p) => p.theme.border.default};
	text-transform: capitalize;
	margin: 0;
`
const TabsWrapperHeaderDiv = styled(WrapperTitle)`
	display: flex;
	font-size: 18px;
	border-bottom: none;
	overflow: hidden;
`
const TabsWrapperDiv = styled.div`
	width: 100%;
	height: 100%;
`
const TabsWrapperElements = styled.div`
	width: 100%;
	height: calc(100% - 55px);
`

interface TabProps {
	theme: DefaultTheme
	active: boolean
}

const Tab = styled.div`
	line-height: 55px;
	position: ${(p: TabProps) => (p.active ? `relative` : ``)};
	box-shadow: ${(p: TabProps) => (p.active ? `3px 0 6px rgba(50, 50, 50, 0.5), -3px 0 6px rgba(50, 50, 50, 0.5)` : ``)};
	border: ${(p: TabProps) => (!p.active ? p.theme.border.default : ``)};
	cursor: ${(p: TabProps) => (!p.active ? `pointer` : ``)};
	flex: 1;
	overflow: hidden;
	background-color: ${(p: TabProps) => (p.active ? p.theme.colors.background.default : p.theme.colors.background.header)};
`
