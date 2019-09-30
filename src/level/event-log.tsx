import React from "react"
import { AutoSizer, Index, List, ScrollParams } from "react-virtualized"
import { ScrollArrows } from "../components/scroll-arrows"
import { styled, ThemeInterface } from "../theme"
import { LevelLog, ModuleType } from "../types/level"

type Props = {
	log: LevelLog[]
	navigate?: (module: string) => void
}
interface State {
	scrollParams?: ScrollParams
}

export class EventLog extends React.Component<Props, State> {
	state: State = {}
	list: React.RefObject<List> = React.createRef()
	open: Map<number, boolean> = new Map()

	componentDidUpdate() {
		if (this.list.current) {
			this.list.current.recomputeRowHeights()
		}
	}

	getModule(log: LevelLog): ModuleType | null {
		if (log.type === "GWEN_LEVEL_UP") {
			return "level"
		}
		if (log.type === "GWEN_MISSION_COMPLETE") {
			return "mission"
		}
		if (log.type === "GWEN_ACHIEVEMENT_COMPLETE") {
			return "achievement"
		}
		if (log.type === "GWEN_CHALLENGE_COMPLETE") {
			return "challenge"
		}
		return null
	}

	getRowHeight(item: Index) {
		let height = 62
		if (this.open.get(item.index)) {
			height = this.getModule(this.props.log[item.index]) ? 154 : 94
		}
		height += +item.index === this.props.log.length - 1 ? 10 : 0
		return height
	}

	render() {
		return (
			<Wrapper>
				<ScrollArrows {...this.state.scrollParams} />
				<AutoSizer>
					{({ height, width }) => (
						<List
							style={{ outline: "none", overflowY: "scroll", paddingRight: "20px" }}
							containerStyle={{ width: `${width}px`, transition: "0.2s ease-in-out" }}
							ref={this.list}
							height={height}
							width={width + 20}
							rowCount={this.props.log.length}
							rowHeight={(item) => this.getRowHeight(item)}
							onScroll={(scrollParams: ScrollParams) => this.setState({ scrollParams })}
							rowRenderer={(item) => {
								const log = this.props.log[item.index]
								const module = this.getModule(log)
								return (
									<div key={item.index} style={{ ...item.style, transition: "0.2s ease-in-out" }}>
										<EventLogWrapper>
											<EventLogHeader>
												<span>{log.text}</span>
												<span>{`+${log.xp}XP`}</span>
											</EventLogHeader>
											<EventLogBody expanded={!!this.open.get(item.index)} button={!!module}>
												<EventLogBodyDate>{new Date(log.date).toLocaleString()}</EventLogBodyDate>
											</EventLogBody>
											<EventLogExpand
												expanded={!!this.open.get(item.index)}
												onClick={() => {
													if (!this.open.get(item.index)) {
														this.open.clear()
													}
													this.open.set(item.index, !this.open.get(item.index))
													if (this.list.current) {
														this.list.current.recomputeRowHeights()
													}
												}}
											>
												▾
											</EventLogExpand>
										</EventLogWrapper>
									</div>
								)
							}}
						/>
					)}
				</AutoSizer>
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	position: relative;
	height: 100%;
	background: ${(p) => p.theme.colors.background.default};
`
const EventLogWrapper = styled.div`
	display: block;
	font-size: 15px;
	margin: 10px;
	box-shadow: ${(p) => p.theme.boxShadow.default};
`
const EventLogHeader = styled.div`
	background: ${(p) => p.theme.colors.background.header};
	border-bottom: 1px solid ${(p) => p.theme.colors.divider};
	display: flex;
	padding: 8px 12px;
	line-height: 16px;
	span {
		flex: 1;
		&:nth-child(1) {
			font-weight: bold;
			text-align: left;
			flex: 3;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		&:nth-child(2) {
			text-align: right;
			color: ${(p) => p.theme.colors.text.secondary};
			flex: 1;
		}
	}
`
interface ExpandedType {
	theme: ThemeInterface
	expanded: boolean
	button?: boolean
}
const EventLogBody = styled.div`
	overflow: hidden;
	transition: 0.2s ease-in-out;
	height: ${(p: ExpandedType) => {
		if (p.expanded) {
			return p.button ? 92 : 32
		}
		return 0
	}}px;
	background: ${(p: ExpandedType) => p.theme.colors.background.default};
	border-bottom: ${(p: ExpandedType) => (p.expanded ? 1 : 0)}px solid ${(p) => p.theme.colors.divider};
`
const EventLogBodyDate = styled.div`
	color: ${(p) => p.theme.colors.text.secondary};
	font-size: 14px;
	padding: 8px 12px;
	text-align: center;
`
const EventLogExpand = styled.div`
	height: ${(p: ExpandedType) => 20}px;
	background: ${(p: ExpandedType) => p.theme.colors.background.header};
	color: ${(p: ExpandedType) => p.theme.colors.secondary};
	transform: ${(p: ExpandedType) => (p.expanded ? "rotate(180deg)" : "")};
	cursor: pointer;
	text-align: center;
`
