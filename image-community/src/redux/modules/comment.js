import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore } from "../../shared/firebase";
import "moment";
import moment from "moment";
import firebase from "firebase/compat/app"
import { actionCreators as postActions } from "./post";
// import post fr

const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";

const LOADING = "LOADING";

const setComment = createAction(SET_COMMENT, (post_id, comment_list) => ({post_id, comment_list}));
const addComment = createAction(ADD_COMMENT, (post_id, comment) => ({post_id, comment}));

const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: {},
  is_loading: false,
};

const addCommentFB = (post_id, contents) => {
    return function(dispatch, getState, {history}){
      const commentDB= firestore.collection("comment");
      // const postDB = firestore.collection("post");
      const user_info = getState().user.user;
      const post = getState().post.list;
      let comment ={
        post_id: post_id,
        user_id: user_info.uid,
        user_name: user_info.user_name,
        user_profile: user_info.user_profile,
        contents: contents,
        insert_dt: moment().format("YYYY-MM-DD hh:mm:ss")
      }

       //파이어스토어에 밀어넣는다
       commentDB.add(comment).then((doc)=>{
         const postDB = firestore.collection("post");
       



         post.find(l => l.id === post.id);  //post에 있는 정보를 가져와서 비교하고 같은값을 넣어줌, 강의대로 여기서 getState()를 붙이면 initialization 안되서 못쓴다고함 그래서 위에서 선언부터함

         const increment = firebase.firestore.FieldValue.increment(1);  //increment에 들어있는 숫자만큼을 현재가진거에 값에서 추가해줌
         // let a = 5; a= a+5 처럼작동한다
         comment = {...comment, id: doc.id }
         postDB.doc(post_id).update({comment_cnt: increment}).then((_post)=>{ //따라서 1만큼 comment_cnt 에 +1 을 해준다. comment_cnt = comment_cnt +1;
          
          dispatch(addComment(post_id, comment)); //여기까지오면 댓글작성 성공, post 게시물도 업데이트하는데 성공했다. 따라서 이제 실제로 업데이트시켜주자

          if(post){
            dispatch(postActions.editPost(post_id, {comment_cnt: parseInt(post.comment_cnt)+1 
            }))
          }

         })  
         
     
       } )
    }
    
}


const getCommentFB = (post_id = null) => {
  return function (dispatch, getState, { history }) {
    const commentDB = firestore.collection("comment");
		
		// post_id가 없으면 바로 리턴하기!
    if(!post_id){
        return;
    }

    // where로 게시글 id가 같은 걸 찾고,
    // orderBy로 정렬해줍니다.
    commentDB
      .where("post_id", "==", post_id)
      .orderBy("insert_dt", "desc")
      .get()
      .then((docs) => {
        let list = [];
        docs.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        //   가져온 데이터를 넣어주자!
        dispatch(setComment(post_id, list));
      }).catch(err => {
          console.log("댓글 가져오기 실패!", post_id, err);
      });
  };
};


export default handleActions(
  {
      [SET_COMMENT]: (state, action) => produce(state, (draft) => {
        // let data ={[post_id]: com_list, ...}
        draft.list[action.payload.post_id]=action.payload.comment_list;
      }),
      [ADD_COMMENT]: (state, action) => produce(state, (draft)=> {
        draft.list[action.payload.post_id].unshift(action.payload.comment);
      }),
      [LOADING]: (state, action) => 
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      })
  },
  initialState
);

const actionCreators = {
  getCommentFB,
  setComment,
  addComment,
  addCommentFB,
};

export { actionCreators };