// widgets.js
import {db} from "../../firebase"
import {collection, getDoc, getDocs, addDoc, doc, updateDoc, getState, deleteDoc} from "firebase/firestore"
import { async } from "@firebase/util";
// Actions
const LOAD = 'bucket/LOAD'; // 서버에서 가져오거나 할때 쓴다 그래서 지워도된다. 
const CREATE = 'bucket/CREATE';  // 생성,추가 기능이므로 킵해놓는다.
const UPDATE = 'bucket/UPDATE';   
const DELETE = 'bucket/DELETE';  
const LOADED = 'bucket/LOADED';

const initialState = { 
    is_loaded: false ,
    list : [ 
        // { text :"영화관 가기", completed : false},
        // { text :"매일 책읽기", completed : false},
        // { text :"수영 배우기", completed : false},
        // { text :"코딩하기", completed : false}
        ]
    
    // list: ["영화관 가기", "매일 책읽기", "수영 배우기", "코딩하기"]
}

export function loadBucket(bucket_list){
    return {type: LOAD, bucket_list};
}

//액션생성함수  action Creators
export function createBucket(bucket)
{ console.log("액션생성")
    return  {type: CREATE, bucket : bucket } //액션 객체 리턴  //key 와 value 가 똑같으면 스킵할수있음 예를들어 widget : widget 처럼 같으면 그냥 widget 인것이다.

}

export function updateBucket(bucket_index){
    return {type :UPDATE, bucket_index}
}

export function deleteBucket(bucket_index)
{ console.log("지울 버킷 인덱스", bucket_index)
    
    return  {type: DELETE , bucket_index : bucket_index } //액션 객체 리턴  //key 와 value 가 똑같으면 스킵할수있음 예를들어 widget : widget 처럼 같으면 그냥 widget 인것이다.

}

export function isLoaded(loaded){
    return {type : LOADED, loaded};
}

//아래 fb 부분은 middlewares  다
export const updateBucketFB =(bucket_id)=>{
    return async function(dispatch, getState) {
  const docRef = doc(db, "bucket", bucket_id);  
  await updateDoc(docRef, {completed : true})    //어떤 첫번째 document넣을지, 2번재는 어떤부분을 수정할지
  
 console.log(getState().bucket)
 const _bucket_list = getState().bucket.list
 const bucket_index = _bucket_list.findIndex((b)=> {
    return b.id === bucket_id;
 })
dispatch(updateBucket(bucket_index))
 console.log(bucket_index)
}
}

export const deletebucketFB = (bucket_id) =>{
     return async function (dispatch, getState){
         if(!bucket_id){ // bucket_id 를 매개변수로 detail.js에서 안넣으면 실행할문 
            window.alert("아이디가 없네요"); 
            return;
         }
         const docRef = doc(db,"bucket", bucket_id);
         await deleteDoc(docRef)

         const _bucket_list = getState().bucket.list
 const bucket_index = _bucket_list.findIndex((b)=> {
    return b.id === bucket_id;});
    dispatch(deleteBucket(bucket_index))
     }
}

export const loadBucketFB = () =>{
    return async function(dispatch){  //비동기 asynchronous 
        const bucket_data =await getDocs(collection(db, "bucket")); //await 을 쓰지않으면 언젠간 데이터를 줄게~ 이런식이기때문에 Promise 로 나온다, 따라서 값을 가져오기위해 async짝인 await 를 써준다.
        console.log(bucket_data); 

        let bucket_list = [];

        bucket_data.forEach((b) =>{
            console.log(b.data())
            // bucket_list=[...bucket_list, {...b.data()}]
            bucket_list.push({id: b.id ,...b.data()});
        });
        console.log(bucket_list)

        dispatch(loadBucket(bucket_list)); // dispatch 되면 reducer 함수에서  switch 문에서 쓸때 인자는 action.bucket_list 가 된다.
    }
}

export const addBucketFB = (bucket) =>{
    return async function (dispatch) { //추가하는것도 비동기작업, 비동기란? 동시에 일어나지않고 호출을 하고 각자할일을 하다가 response 가오면 그것을 받아서 마저 처리하는것
        dispatch(isLoaded(false));
        const docRef = await addDoc(collection(db, "bucket"), bucket) //내가 만들어준 db 라는 파이어스토어에 bucket 이라는 콜렉션으로 지칭해주고 매개변수로 넘어온 bucket(app.js가보면 추가하기 클릭시 add함수를 통해 dispatch되어 일로옴, 그 값은 current.value와 completed)
        // const _bucket = await getDoc(docRef); //위에 저장한 값을 다시 getDoc을 사용하여 가져온다.
        const bucket_data = {id: docRef.id, ...bucket} //가져온것으로 bucket_data 라고하여 id와 data만 가진 객체로 저장한다. // 위의 _bucket을 사용하지않고 직접적으로 docRef 와 bucket을 사용해도된다. 
        console.log((await getDoc(docRef)).data()) // 그냥 docRef.data, docRef.id 하면 참조값을 불러오는것이고 ref type 은 document 라고 되어있어서 await getDoc 으로 써야한다.
        console.log(bucket_data);

        dispatch(createBucket(bucket_data));  //위에 저장한 객체를 dispatch 로 액션을 주어 create하여 type이 CREATE이고 아래로 내려와 reducer를 거쳐 case 문에 bucket/CREATE 으로 가서 기존것에 추가하여 넣는다.
    }
}
 


// Reducer
export default function reducer(state = initialState, action = {}) {    // 만약 초기값이 없으면 {} 으로 만들어놓고 빈 딕셔너리라 라고 알려준다 왜나하면 보통 안들어있으면 default로 정의되는데 그 블록안에 실행이 연산을 통한것이라면 에러가 나니 미리 빈공간이라고 선언
switch (action.type) {
    case "bucket/LOAD" :{
        return {list: action.bucket_list, is_loaded: true}
    }

    case "bucket/CREATE" : {
        console.log(state)
        const new_bucket_list =[...state.list, action.bucket]; //기존 state에 있는 list 를 설정해주고, input안에 추가했던 내용이 action.bucket 에 들어있다, 그걸 뒤에 덧붙여줌
        console.log(new_bucket_list)
        return {...state, list : new_bucket_list, is_loaded: true}; // 새로운게 추가된게 들어갈 배열을 만듬, 새로운 상태값 리턴
    }

    case "bucket/UPDATE" :{
        console.log("업데이트")
        console.log(state, action)
        const new_bucket_list = state.list.map((l,idx)=>{
            console.log(l)
            if(parseInt(action.bucket_index) === idx){
                return {...l, completed:true}
            } else {return l}
        })
        console.log({list : new_bucket_list})
        return {list : new_bucket_list, is_loaded: true}
    }
    
    case "bucket/DELETE" : {
        console.log(state, action)
        const new_bucket_list = state.list.filter((l,idx)=> 
    {   
        return parseInt(action.bucket_index) !== idx;
    });
 console.log(new_bucket_list)

        return {...state, list : new_bucket_list}; // 새로운게 추가된게 들어갈 배열을 만듬, 새로운 상태값 리턴
    }
    
    case "bucket/LOADED" : {
        return {...state, is_loaded: action.loaded}
    }

    // do reducer stuff
default: return state;
}
}


// export function createWidget(widget) {
// return { type: CREATE, widget };            //key 와 value 가 똑같으면 스킵할수있음 예를들어 widget : widget 처럼 같으면 그냥 widget 인것이다.
// }
