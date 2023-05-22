import styled from 'styled-components'
import {ReactComponent} from "../../assets/icons/ReactMeals/Component 6/Vector.svg"

const OrderBasket = ({children}) => {


       return (
        <Button>
        <ReactComponent/> <OrderBasketTitle>{children}</OrderBasketTitle>{''}
        <OrderBasketCount>7</OrderBasketCount>
        </Button>
       )
}

const Button = styled.button`
width: 249px;
height: 59px;
background: #5A1F08;
border-radius: 30px; display: flex;
align-items: center;
justify-content: center;
border: none;
cursor: pointer;

&:hover{
       background-color:#4d1601
}
`


const OrderBasketTitle = styled.span`
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
margin:0px 24px 13px;
`

const OrderBasketCount = styled.span`
background: #8A2B06;
border-radius: 30px;
padding: 4px 13px;
display: inline-block;
`

export default OrderBasket;