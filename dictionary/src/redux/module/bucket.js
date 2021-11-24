import {db} from "../../firebase"; // ../../ 두번쓰는건 현재 위치가 moudule 폴더 안 그위가 redux 그위가 src 이기때문에 
import {collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore';
import { async } from "@firebase/util";


const LOAD = 'bucket/LOAD'; // 서버에서 가져오거나 할때 쓴다  
const CREATE = 'bucket/CREATE';  // 생성,추가 기능이므로 킵해놓는다.


const initialState = {    //초기 state 객체 만들어줌.
    list : [//{ name : "영화관 가기", desc : "이렇게", ex : "aaa" }, 
            //{ name : "수영 배우기", desc :"설명을", ex : "bbb"},
            //{ name : "코딩하기"  , desc :"하나씩",  ex : "ccc" } ,
            //{ name : "테스트"   , desc :"넣자" ,   ex : "ddd"} 
           ]
}



 //create 액션 생성함수

 export function loadBucket(bucket_list){
    return {type: LOAD, bucket_list};
}

 export function createBucket(bucket)
 { 
     return {type: CREATE, bucket } 
 }

 
//middlewares 미들함수
export const loadBucketFB=()=>{
    return async function(dispatch){ //매개변수가 dispatch 인건 이해가안감 그리고 return에 바로 함수로 하는것도 
        const bucket_data =await getDocs(collection(db, "dictionary")); //파이어 문서를 다가져옴
        // console.log(bucket_data)
        let bucket_list =[];
        bucket_data.forEach((doc) => {
            //  console.log(doc.data())
            bucket_list.push({...doc.data()})
        });

        console.log(bucket_list)
        dispatch(loadBucket(bucket_list));


    }
}



 export default function reducer(state = initialState, action = {}) {
    switch(action.type)
    {
        case 'bucket/CREATE' :{
            console.log(action.bucket)
    const new_bucket_list =[...state.list, action.bucket];
    console.log(new_bucket_list)
    return {list : new_bucket_list}
        }
        
        case 'bucket/LOAD' : {
            return {list: action.bucket_list}
        }

        default: return state;

    }

 }
