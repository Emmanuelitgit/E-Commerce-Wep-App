import React, { useState } from 'react';
import styled from 'styled-components';
import{ ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems} from "../Data";

const Container = styled.div`
width: 100%;
height: 100vh;  
display: flex;
position: reltive;
overflow: hidden;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
align-items: center;
display:flex;
justify-content : center;
position: absolute;
top:0;
bottom:0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction=== "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`

const Wrapper = styled.div`
height:100%;
display:flex;
transform: translateX(${props=>props.slideIndex * -100}vw);
transition: all 1.5s ease;
`
const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items: center;
background-color:#F6F6F6;
 
`
const ImageContainer = styled.div`
height:100%;
flex:1;
`
const Image = styled.img`
height:80%;
margin-left: ${props => props.marginleft}
`
const ImageInfo = styled.div`
flex:1;
`
const Title = styled.h1`

`
const Desc = styled.p`
margin:50px 0px;
font-size: 20px;
font-weight:500;
letter-spacing:3ox;
`
const Button = styled.button`
padding: 10px;
font-size:20px;
background-color: transparent;
cursor:pointer;
`



function Slider() {
	const[slideIndex, setslideIndex]=useState(0);
	const handleClick = (direction)=>{
       if(direction === "left"){
		setslideIndex(slideIndex > 0 ? slideIndex-1 : 2);
	  }else{
		setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
	}
	}
  return (
    <Container>
	<Arrow direction="left" onClick={()=> handleClick("left")}>
	  <ArrowLeftOutlined/>
	</Arrow>
	<Wrapper slideIndex={slideIndex}>
		{sliderItems.map(item=>(
     <Slide bg={item.bg} key={item.id}>
	<ImageContainer>
		<Image src ={item.img} marginleft={item.marginleft} />
	</ImageContainer>
	<ImageInfo>
		<Title>{item.title}</Title>
		<Desc>{item.desc }</Desc>
		<Button>SHOP NOW</Button>
	</ImageInfo>
	</Slide>
		))}
		
	</Wrapper>
	<Arrow direction="right" onClick={()=> handleClick("right")}>
	<ArrowRightOutlined/>
	</Arrow>
    </Container>
  )
}

export default Slider;