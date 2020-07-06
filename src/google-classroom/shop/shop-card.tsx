import styled from "styled-components"
import { ModuleShopItem } from "../../types/shop"

interface Props {
	data: ModuleShopItem
}

export const ShopCard = (props: Props) => {
	const { data } = props
}

const Wrapper = styled.div`
	width: 200px;
	padding: 10px;
	background: white;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
`

const Title = styled.span`
	font-weight: 700;
	font-size: 16px;
`

const Icon = styled.div`
	width: 150px;
	height: 150px;
`
