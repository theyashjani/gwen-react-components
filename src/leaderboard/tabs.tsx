import React from "react"
import styled from "styled-components"

type Props = {
	value?: string
	items?: Array<{ text: string; value: string }>
	onChange: (value: string) => void
}

export function Tabs(props: Props) {
	return (
		<TabsWrapper>
			<TabsHeader>
				{props.items &&
					props.items.map((item) => (
						<div
							key={item.value}
							className={item.value === props.value ? "active" : ""}
							onClick={() => props.onChange(item.value)}
							data-cy={`tab-${item.value}`}
						>
							<div>
								<span>{item.text}</span>
							</div>
						</div>
					))}
			</TabsHeader>
		</TabsWrapper>
	)
}

const TabsWrapper = styled.div`
	width: 100%;
	position: relative;
`
const TabsHeader = styled.div`
	width: 100%;
	height: ${(p) => p.theme.proportions(50)}px;
	display: flex;
	border-bottom: ${(p) => p.theme.proportions(4)}px solid ${(p) => p.theme.gwen.colors.primary};
	overflow: hidden;
	> div {
		flex: 1;
		display: flex;
		align-items: center;
		cursor: pointer;
		background: ${(p) => p.theme.gwen.colors.background.header};
		color: ${(p) => p.theme.gwen.colors.text.secondary};
		text-align: center;
		&:nth-last-of-type(1) {
			> div {
				border-right: 0;
			}
		}
		> div {
			width: 100%;
			line-height: ${(p) => p.theme.proportions(30)}px;
			border-right: ${(p) => p.theme.gwen.border.default};
		}
		&.active {
			background: ${(p) => p.theme.gwen.colors.primary};
			color: ${(p) => p.theme.gwen.colors.background.header};
			margin-left: -${(p) => p.theme.proportions(1)}px;

			> div {
				border: none;
			}
		}
	}
`
