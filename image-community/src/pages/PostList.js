import React from "react";
import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux"; //리덕스에 있는 정보가져옴
import post, { actionCreators as postActions } from "../redux/modules/post";
import InfinityScroll from "../shared/InfinityScroll";
import { Grid } from "../elements";
import { apiKey } from "../shared/firebase";
// import {  history } from "../redux/configureStore";
const PostList = (props) => {
  const post_list = useSelector((state) => state.post.list); //이 경로는 configureStore.js 에서 rooReducer에 묶어진 변수를 보면알수있다.
  const user_info = useSelector((state) => state.user.user);
  const is_loading = useSelector((state) => state.post.is_loading);
  const paging = useSelector((state) => state.post.paging);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_login = useSelector((state)=> state.user.is_login);
  const is_session = sessionStorage.getItem(_session_key) ? true : false;
  
  const { history } = props;
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (post_list.length<2) {
      dispatch(postActions.getPostFB());
    }
  }, []);
  return (
    <React.Fragment>
      {/* 목록 페이지! */}
      {/* <Post /> */}
      {/*한개의 포스트만 아니라 많이 필요하므로 post_list값을 map 을 돌려 return해줌*/}
      <Grid bg={"#EFF6FF"} padding="20px 0px">
        <InfinityScroll
          callNext={() => {
            dispatch(postActions.getPostFB(paging.next));
            // console.log("next!");
          }}
          is_next={paging.next ? true : false}
          loading={is_loading}
        >
          {post_list.map((p, idx) => {
            if (p.user_info.user_id === user_info?.uid) {
              //옵셔널 체이닝 사용
              return (
                <Grid margin="20px 0px" bg={"#FFFFFF"}key={p.id} _onClick={()=> {
                  history.push(`/post/${p.id}`);
                }}>
                  <Post key={p.id} {...p} is_me />
                </Grid>
              );
            } else {
              return (
                <Grid key={p.id}
                  _onClick={() => {
                    {is_login&&is_session?history.push(`/post/${p.id}`): history.push("/login") } 
                  }}
                >
                  <Post key={p.id} {...p} />
                </Grid>
              );
            }
          })}
        </InfinityScroll>
      </Grid>
      {/* <button
        onClick={() => {
          console.log(paging.next);
          dispatch(postActions.getPostFB(paging.next));
        }}
      >
        추가로드
      </button> */}
    </React.Fragment>
  );
};

export default PostList;
