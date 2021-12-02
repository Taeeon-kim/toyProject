import React from "react";
import {Grid,Text,Image} from "../elements/index"   //import 를 한 js파일에 묶어서 export 함
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";


const Post =(props) => {

  
    return (
        <React.Fragment>
            <Grid padding="16px">
                <Grid is_flex>
                    <Image shape="circle" src ={props.src}/>
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text bold>{props.insert_dt}</Text>
                {/* user profile / user name / insert_dt(작성시간) / is_me btn(요건 로그인때함) */}
                </Grid>
                <Grid padding="16px">
                    <Text>{props.contents} </Text>
                </Grid>
                <Grid>
                <Image shape="rectangle" src={props.image_url}/>
                </Grid > 
                <Grid padding="16px"> 
                <Text margin="0px" bold>댓글 {props.comment_cnt}개</Text>
                </Grid>
    
            </Grid>
        </React.Fragment>
    )
}

Post.defaultProps = {     // 정보를 안줘서 화면이 깨지거나 오류가 날때도 있는데 그것을 방지하기위해 쓴다. 이건 최소한으로 필요한 props를 미리 넘겨준다.
    user_info : { 
        user_name : "Youngble",
        user_profile : "https://youngble.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Photo_2021-11-17-00-56-23.jpeg",
        
    },
    image_url :"https://youngble.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Photo_2021-11-17-00-56-23.jpeg",
    contents: "스파르타네요!",
    comment_cnt : 10,
    insert_dt : "2021-11-29 14:14",
};

export default Post;