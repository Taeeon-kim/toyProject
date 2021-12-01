import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import {firestore}  from "../../shared/firebase" 

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list)=>({post_list}));
const addPost = createAction(ADD_POST, (post)=>({post}));

const initialState = {
    list: [],
}


const initialPost = {
    id:0,
    user_info : { 
        user_name : "Youngble",
        user_profile : "https://youngble.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Photo_2021-11-17-00-56-23.jpeg",
        
    },
    image_url :"https://youngble.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Photo_2021-11-17-00-56-23.jpeg",
    contents: "스파르타네요!",
    comment_cnt : 10,
    insert_dt : "2021-11-29 14:14",
}

const getPostFB = () => {
    return function (dispatch, getState, {history}){
        const postDB = firestore.collection("post");

        postDB.get().then((docs) =>{
            let post_list = [];
            docs.forEach((doc)=> { 
                let _post = doc.data();  //파이어스토어에서 문서가져옴
                console.log(_post)
                let post = Object.keys(_post).reduce((acc,cur)=>{         // 키값들을 배열로 만들어줌
                        if(cur.indexOf("user_")!== -1){
                            return {...acc, user_info: {...acc.user_info, [cur]: _post[cur]}}
                        }
                        return {...acc,[cur]: _post[cur] }    //_post[cur] 이라는건 value로써 키에 해당하는 value를 
                  }, {id: doc.id, user_info:{}})      //처음 기본값을 _post에 없는 id: doc.id 를 미리 넣고 

                    post_list.push(post)
            })
        
            console.log(post_list)
                dispatch(setPost(post_list));
        })
    }
}


export default handleActions(
{
    [SET_POST]: (state, action) =>produce(state, (draft)=>{
            draft.list = action.payload.post_list;  //draft.list 를 action으로 넘어와서 payload에 있는 post_list 를 넣어서 복사해줌, 이건 위에 getPostFB에서  map과 push, setPost등등으로 넘겨서 가져온것이다
    }),

    [ADD_POST]: (state, action) =>produce(state, (draft)=>{

    })


}, initialState);

const actionCreators = {
    setPost,
    addPost,
    getPostFB,
}

export {actionCreators};