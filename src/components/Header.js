import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Header = () => {
  const [burgerState, setBurgerState] = useState(false)
  return (
    <Container>
      <a><img src='/images/logo.svg' /></a>
      <Menu>
        <a href='#'>Vehicles</a>
        <a href='#'>Energy</a>
        <a href='#'>Charging</a>
        <a href='#'>Discover</a>
        <a href='#'>Shop</a>
      </Menu>
      <RightMenu>
        <CustomMenu onClick={() => setBurgerState(true)}>
          <p>Menu</p>
        </CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerState}>
        <CloseWrapper onClick={() => setBurgerState(false)}>
          <CustomClose />
        </CloseWrapper>
        <ListStyle>
          <h3>Vehicles</h3>
          <ArrowForwardIosIcon />
        </ListStyle>
        <ListStyle>
          <h3>Energy</h3>
          <ArrowForwardIosIcon />
        </ListStyle>
        <ListStyle>
          <h3>Charging</h3>
          <ArrowForwardIosIcon />
        </ListStyle>
        <ListStyle>
          <h3>Discover</h3>
          <ArrowForwardIosIcon />
        </ListStyle>
        <ListStyle>
          <h3>Shop</h3>
        </ListStyle>
        <ListStyle>
          <h3>Support</h3>
        </ListStyle>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
z-index: 1;
`;

const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
a{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
  color: white;
}

@media(max-width: 800px){
  display: none;
}
`;

const RightMenu = styled.div`
display: flex;
align-items: center;
a{
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 10px;
  flex-wrap: nowrap;
}
`;

const CustomMenu = styled.div`
cursor: pointer;
background-color: #393c41ae;
color: white !important;
padding: 5px 13px;
border-radius: 3px;
@media(min-width: 800px){
  display: none;
}
`;


const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 100vw;
  z-index: 100; 
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    a{
      font-weight: 600;

    }
  }
`

const CustomClose = styled(CloseIcon)`
cursor: pointer;

`
const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
`;

const ListStyle = styled.div`
display: flex;
justify-content: space-between;
margin-top: 50px;
color: #393c41ae;
`;