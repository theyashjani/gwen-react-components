import React from "react"
import { AutoSizer, List, ScrollParams } from "react-virtualized"
import styled from "styled-components"
import { ScrollArrows } from "../components/scroll-arrows"
import { LevelAvatarData } from "../types/level"

export interface SelectAvatarProps {
	current?: string
	select: (avatar: LevelAvatarData) => void
	closeModal: () => void
	avatars: LevelAvatarData[]
}
interface State {
	scrollParams?: ScrollParams
}

export class SelectAvatar extends React.PureComponent<SelectAvatarProps, State> {
	state: State = {}

	render() {
		return (
			<>
				<ScrollArrows {...this.state.scrollParams} />
				<AutoSizer>
					{({ height, width }) => (
						<List
							style={{ outline: "none", overflowY: "scroll", paddingRight: "20px", userSelect: "none" }}
							containerStyle={{ width: `${width}px` }}
							height={height}
							width={width + 20}
							rowHeight={186}
							rowCount={Math.ceil(this.props.avatars.length / 2)}
							onScroll={(scrollParams: ScrollParams) => this.setState({ scrollParams })}
							rowRenderer={(item) => {
								const avatar = this.props.avatars[item.index * 2]
								const avatar2 = this.props.avatars[item.index * 2 + 1]
								return (
									<div
										key={item.index}
										style={{ ...item.style, padding: "15px", display: "flex", alignItems: "center", flexDirection: "column", flexWrap: "wrap" }}
									>
										<Avatar onClick={() => this.props.select(avatar)} className={avatar.id === this.props.current ? "selected" : ""}>
											<img src={avatar.url} alt="avatar" />
											{avatar.id === this.props.current && (
												<AvatarCheck>
													<img src="https://gwen.insertcoin.se/widget/images/icons/checkmark-green.svg" alt="checkmark" />
												</AvatarCheck>
											)}
										</Avatar>
										{avatar2 ? (
											<Avatar onClick={() => this.props.select(avatar2)} className={avatar2.id === this.props.current ? "selected" : ""}>
												<img src={avatar2.url} alt="avatar" />
												{avatar2.id === this.props.current && (
													<AvatarCheck>
														<img src="https://gwen.insertcoin.se/widget/images/icons/checkmark-green.svg" alt="checkmark" />
													</AvatarCheck>
												)}
											</Avatar>
										) : (
											<EmptyAvatar />
										)}
									</div>
								)
							}}
						/>
					)}
				</AutoSizer>
			</>
		)
	}
}

const Avatar = styled.div`
	position: relative;
	width: calc(50% - 30px);
	max-width: 156px;
	height: 156px;

	border: 10px solid ${(p) => p.theme.gwen.colors.background.backdrop};
	border-radius: 100%;
	transition: 0.2s ease-in-out;
	cursor: pointer;
	box-shadow: ${(p) => p.theme.gwen.boxShadow.default};
	margin: 0 15px;
	img {
		display: block;
		border-radius: 100%;
	}
	&:hover {
		border-color: ${(p) => p.theme.gwen.colors.background.header};
	}
`
const EmptyAvatar = styled.div`
	width: calc(50% - 30px);
	max-width: 156px;
	height: 156px;
`
const AvatarCheck = styled.div`
	position: absolute;
	top: -5px;
	right: -0px;
	width: 35px;
	height: 35px;
	background: ${(p) => p.theme.gwen.colors.background.header};
	font-size: 25px;
	padding: 4px;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		width: 100%;
		height: auto;
	}
`
