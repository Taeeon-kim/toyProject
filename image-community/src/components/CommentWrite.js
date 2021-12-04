import React from "react";
import {Grid, Input, Image, Text, Button } from "../elements";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch, useSelector } from "react-redux";

const CommentWrite = (props) => {

   
    const dispatch = useDispatch();
   
     const [comment_text, setCommentText ]= React.useState();
 
    const {post_id} = props;
    const onChange = (e) =>{
        setCommentText(e.target.value);
    }
    const write =() =>{
       
        dispatch(commentActions.addCommentFB(post_id, comment_text))
        setCommentText("");  //이렇게 클린하기위해서 아래 value={comment_text}를 쓴것이다.


    }

    return (
        <React.Fragment>
         <Grid padding="16px" is_flex={true}>
             <Input placeholder="댓글내용을 입력해주세요." _onChange={onChange} value={comment_text} is_submit onSubmit={write}/> 
             <Button width="50px" margin="0px 2px 0px 2px" _onClick={write} >작성</Button>
             </Grid>   
        </React.Fragment>
    )
}

export default CommentWrite;