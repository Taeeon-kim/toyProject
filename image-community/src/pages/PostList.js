import React from "react";
import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux"; //리덕스에 있는 정보가져옴
import { actionCreators as postActions } from "../redux/modules/post";

const PostList = (props) =>{
    const post_list = useSelector((state)=> state.post.list);    //이 경로는 configureStore.js 에서 rooReducer에 묶어진 변수를 보면알수있다.
    console.log(post_list)
    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(postActions.getPostFB());
    },[])
    return (
        <React.Fragment>
            {/* 목록 페이지! */}
            {/* <Post /> */} {/*한개의 포스트만 아니라 많이 필요하므로 post_list값을 map 을 돌려 return해줌*/}
            {post_list.map((p,idx)=>{
                return <Post key={p.id} {...p} />
            })}
        </React.Fragment>
    )
}

export default PostList