import styled from'styled-components'
import OrderBasket from './OrderBasket';

const Header = () => {
 return (
    <header>
    <Container>
    <h1>ReactMelas</h1>
    <OrderBasket>Your Cart </OrderBasket>
    </Container>
    </header>
   
 )
}

const Container = styled.div`
height: 101px;
/* width: 100%; */
background:#8A2B06 ;
padding: 0 120px;
display: flex;
align-items: center;
justify-content: space-between;
color: #FFFFFF;
;
`

export default Header;