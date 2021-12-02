import styled from "styled-components";
import React from "react";

const Image =(props) =>{
    const {shape,src,size, width}= props

    const styles = {
        src:src,
        size:size,
       
    }
    if(shape==="circle"){
        return (
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape === "rectangle"){
        return(
            <AspectOutter width={width}>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>

        )

    }
    
}

Image.defaultProps = {
    shape: "rectangle",
    src : "https://youngble.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Photo_2021-11-17-00-56-23.jpeg",
    size: 36,
    width: "100%",

}

const AspectOutter =styled.div`
    width:${(props)=>props.width};
    min-width: 250px;
`;

const AspectInner = styled.div`
    position : relative;
    padding-top: 100%;   // 화면에서 4:3비율로 보이기위해 하지만 아래가짤리므로 난 100%을줌
    overflow:hidden; // overflow 찾아볼것
    background-image: url("${(props)=> props.src}");
    background-size: cover;
    
`;

const ImageCircle = styled.div`
    --size: ${(props)=>props.size}px;
    /* width: 36px;
    height: 36px;
    border-radius: 36px; */
    width: var(--size); //위에 --size 변수를 쓸땐 이렇게 var하고 ()안에 넣어준다.
    height: var(--size);
    border-radius: var(--size);
    min-width: 36px;
    background-image: url("${(props)=>props.src}");
    background-size: cover;
    margin: 4px;
`;

export default Image;