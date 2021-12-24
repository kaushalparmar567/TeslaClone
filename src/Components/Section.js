import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section(props) {
    return (
        <Wrap bgImg={props.backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p><a href='#'>{props.description}</a></p>
                </ItemText>
            </Fade>
            <Fade bottom>            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {props.leftBtnText}
                    </LeftButton>
                    {props.rightBtnText &&
                        <RightButton>
                            {props.rightBtnText}
                        </RightButton>
                    }

                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
            </Fade>
        </Wrap>
    )
}

export default Section
{/*vw = viewWidth vh=viewHeight */ }
const Wrap = styled.div`
width: 100vw; 
height: 100vh;
background-size: cover;
background-repeat : no-repeat;
background-position: center;
background-image: url('/images/model-s.jpg');
display: flex;
flex-direction: column;
justify-content: space-between; //vertical alignment
align-items: center;  // horizontal alignment
background-image: ${props => `url("/images/${props.bgImg}")`}
`

const ItemText = styled.div`
padding-top:15vh;
text-align: center;
line-height: 35px;
p {
    text-decoration: underline;

}
`

const ButtonGroup = styled.div`
  display: flex;  
  margin-bottom: 30px;
  @media(max-width : 768px)
  {
      flex-direction:column;
  }
`

const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
    height:40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items : center;
    border-radius : 100px;
    opacity : 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor : pointer;
    margin:8px;
`

const RightButton = styled(LeftButton)`
background-color:white;
opacity: 0.65;
color: black;
`

const DownArrow = styled.img`
    height: 40px;
    animation : animateDown infinite 1.5s;  
    overflow-x: hidden;   
`
const Buttons = styled.div`
`


