import { createAction, createActions, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore, storage } from "../../shared/firebase";
import moment from "moment";

import { actionCreators as imageActions } from "./image";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const LOADING = "LOADING";

const setPost = createAction(SET_POST, (post_list, paging) => ({ post_list, paging }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: [],
  paging: { start: null, next: null, size: 3 },
  is_loading: false,
  // comment_cnt: 0,
};

const initialPost = {
  // id:0,
  // user_info : {
  //     user_name : "Youngble",
  //     user_profile : "https://youngble.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Photo_2021-11-17-00-56-23.jpeg",

  // },
  image_url:
    "https://youngble.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Photo_2021-11-17-00-56-23.jpeg",
  contents: "",
  comment_cnt: 0,
  insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
};

const editPostFB = (post_id = null, post = {}) => {
  return function (dispatch, getState, { history }) {
    if (!post_id) {
      console.log("게시물 정보가 없습니다.");
      return;
    }

    const _image = getState().image.preview;

    const _post_idx = getState().post.list.findIndex((p) => p.id === post_id);
    const _post = getState().post.list[_post_idx];

    const postDB = firestore.collection("post");

    // console.log(_post)
    if (_image === _post.image_url) {
      postDB
        .doc(post_id)
        .update(post)
        .then((doc) => {
          dispatch(editPost(post_id, { ...post }));
          history.replace("/");
        });
      return;
    } else {
      const user_id = getState().user.user.uid;
      const _upload = storage
        .ref(`images/${user_id}_${new Date().getTime()}`)
        .putString(_image, "data_url"); //업로드할때 사용자명과 현재시간으로 image를 업로드해줘서 이름중복없이 고유한 파일이 되게해준다
      _upload.then((snapshot) => {
        snapshot.ref
          .getDownloadURL()
          .then((url) => {
            console.log(url);

            return url;
          })
          .then((url) => {
            postDB
              .doc(post_id)
              .update({ ...post, image_url: url })
              .then((doc) => {
                dispatch(editPost(post_id, { ...post, image_url: url }));
                history.replace("/");
              });
          });
      });
    }
  };
};

const addPostFB = (contents = "") => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");
    const _user = getState().user.user; // getState스토어에있는 정보가져옴
    
    
    const user_info = {
      user_name: _user.user_name,
      user_id: _user.uid,
      user_profile: _user.user_profile,
    };
    const _post = {
      ...initialPost,
      contents: contents,
      insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };

    const _image = getState().image.preview;
    
    // console.log(typeof _image);
    // console.log(typeof _image);

    const _upload = storage
      .ref(`images/${user_info.user_id}_${new Date().getTime()}`)
      .putString(_image, "data_url"); //업로드할때 사용자명과 현재시간으로 image를 업로드해줘서 이름중복없이 고유한 파일이 되게해준다
    _upload.then((snapshot) => {
      snapshot.ref
        .getDownloadURL()
        .then((url) => {
          console.log(url);

          return url;
        })
        .then((url) => {
          postDB
            .add({ ...user_info, ..._post, image_url: url })
            .then((doc) => {
              let post = {
                user_info: user_info,
                ..._post,
                id: doc.id,
                image_url: url,
              };
              dispatch(addPost(post));
              history.replace("/");

              dispatch(imageActions.setPreview(null));
            })
            .catch((err) => {
              window.alert("포스트 작성에 문제가 있습니다.");
              console.log("post 작성에 실패", err);
            });
        })
        .catch((err) => {
          window.alert("이미지 업로드에 문제가 있습니다.");
          console.log("이미지 업로드에 문제가 발생!", err);
        });
    });
  };
};

const getPostFB = (start = null, size = 3) => {
  return function (dispatch, getState, { history }) {

    let _paging = getState().post.paging;

    if( _paging.start  && (!_paging.next)){
        return ;
    }

    dispatch(loading(true));
    const postDB = firestore.collection("post");

    let query = postDB.orderBy("insert_dt", "desc"); //위에 init값으로 3개를 줬는데 4개를 준이유는 4개를 다 가지고오면 리덕스에서 가져온 3개짜리 리스트에서 1개가 더 있는거다 그래서 4개씩 가져와서 처리하기위해

    if(start){
       query = query.startAt(start);
    }

    query
      .limit(size + 1)
      .get()
      .then((docs) => {
        let post_list = [];

        let paging ={
            start: docs.docs[0],
            next: docs.docs.length === size+1? docs.docs[docs.docs.length-1]:null,
            size: size,
        }

        docs.forEach((doc) => {
          let _post = doc.data(); //파이어스토어에서 문서가져옴
        //   console.log(_post);
          let post = Object.keys(_post).reduce(
            (acc, cur) => {
              // 키값들을 배열로 만들어줌
              if (cur.indexOf("user_") !== -1) {
                return {
                  ...acc,
                  user_info: { ...acc.user_info, [cur]: _post[cur] },
                };
              }
              return { ...acc, [cur]: _post[cur] }; //_post[cur] 이라는건 value로써 키에 해당하는 value를
            },
            { id: doc.id, user_info: {} }
          ); //처음 기본값을 _post에 없는 id: doc.id 를 미리 넣고

          post_list.push(post);
        });

        post_list.pop(); //마지막 배열값을 없애줌
        // console.log(post_list);
        dispatch(setPost(post_list, paging));
      });

  };
};


const getOnePostFB =(id)=>{
  return function(dispatch, getState, {history}){
    const postDB = firestore.collection("post");

        postDB.doc(id).get().then(doc=>{

            let _post = doc.data();
            let post = Object.keys(_post).reduce(
                (acc, cur) => {
                  // 키값들을 배열로 만들어줌
                  if (cur.indexOf("user_") !== -1) {
                    return {
                      ...acc,
                      user_info: { ...acc.user_info, [cur]: _post[cur] },
                    };
                  }
                  return { ...acc, [cur]: _post[cur] }; //_post[cur] 이라는건 value로써 키에 해당하는 value를
                },
                { id: doc.id, user_info: {} }
              ); //처음 기본값을 _post에 없는 id: doc.id 를 미리 넣고
               dispatch(setPost([post])) 
        })
  }
}

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.post_list); //draft.list 를 action으로 넘어와서 payload에 있는 post_list 를 넣어서 복사해줌, 이건 위에 getPostFB에서  map과 push, setPost등등으로 넘겨서 가져온것이다
        
        draft.list= draft.list.reduce((acc,cur) =>{
            if(acc.findIndex(a=> a.id===cur.id)=== -1){
              return [...acc, cur];
            }else{
              acc[acc.findIndex(a=> a.id===cur.id)] =cur;
              return acc;
            }
        },[]);
        

        if(action.payload.paging)
        {
          draft.paging = action.payload.paging;
        }
        draft.is_loading = false;
    }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post); //뒤로 붙이는게 아닌 앞에 붙여야해서 push가 아닌 unshift를 씀
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload)
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);

        draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPostFB,
  addPostFB,
  editPost,
  editPostFB,
  getOnePostFB,
};

export { actionCreators };
