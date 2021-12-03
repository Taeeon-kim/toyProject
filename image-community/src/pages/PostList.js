import React from "react";
import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux"; //리덕스에 있는 정보가져옴
import post, { actionCreators as postActions } from "../redux/modules/post";
import InfinityScroll from "../shared/InfinityScroll";

const PostList = (props) => {
  const post_list = useSelector((state) => state.post.list); //이 경로는 configureStore.js 에서 rooReducer에 묶어진 변수를 보면알수있다.
  const user_info = useSelector((state) => state.user.user);
  const is_loading = useSelector((state) => state.post.is_loading);
  const paging = useSelector((state) => state.post.paging);
  console.log(post_list);
 
  console.log(paging);
  
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  }, []);
  return (

    <React.Fragment>
      {/* 목록 페이지! */}
      {/* <Post /> */}
      {/*한개의 포스트만 아니라 많이 필요하므로 post_list값을 map 을 돌려 return해줌*/}
      
      <InfinityScroll callNext={()=>{
        dispatch(postActions.getPostFB(paging.next))
        console.log("next!")

      }}
      // is_next={paging.next ? true:false}
      loading={is_loading}
      >
      {post_list.map((p, idx) => {
        if (p.user_info.user_id === user_info?.uid) {
          //옵셔널 체이닝 사용

          return <Post key={p.id} {...p} is_me />;
        } else {
          return <Post key={p.id} {...p} />;
        }
      })}
      </InfinityScroll>
      <button
        onClick={() => {
          console.log(paging.next)
          dispatch(postActions.getPostFB(paging.next));
        }}
      >
        추가로드
      </button>
    </React.Fragment>
  );
};

export default PostList;
