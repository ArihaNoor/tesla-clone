import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


const FirstSection = (props) => {
    return (
        <Wrap>
            <video autoPlay loop muted>
                <source src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-NA.mp4" type="video/mp4" />
            </video>
            <MainSection>
            <h1>Experience Tesla</h1>
            <p>Schedule a Demo Drive Today</p>
            </MainSection>
            <CustomButton>
            <FirstButton>Demo Drive</FirstButton>
            </CustomButton>
        </Wrap>
    )
}

export default FirstSection;

const Wrap = styled.div`
width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative; 
video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1; /* Place the video behind other content */
  }
`

const MainSection = styled.div`
h1{
    color: white;
    font-size: 45px;
}p{
    color: white;
    margin-top: 10px;
}
`;

const FirstButton = styled.button`
background-color: transparent;
color: white;
border: none;
font-weight: 400;
font-size: 15px;
`;
const CustomButton = styled(FirstButton)`

border: 3px solid white;
padding: 10px 30px;
border-radius: 3px;
`;