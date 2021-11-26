import {db} from "../../firebase"; // ../../ 두번쓰는건 현재 위치가 moudule 폴더 안 그위가 redux 그위가 src 이기때문에 
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore';



const LOAD = 'bucket/LOAD'; // 서버에서 가져오거나 할때 쓴다  
const CREATE = 'bucket/CREATE';  // 생성,추가 기능이므로 킵해놓는다.
const UPDATE = 'bucket/UPDATE';
const DELETE = 'bucket/DELETE';
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

 export function updateBucket(bucket){
    return {type: UPDATE, bucket } 
 }

 export function deleteBucket(bucket_index){
     return {type : DELETE, bucket_index}
 }

 
//middlewares 미들함수
export const loadBucketFB=()=>{
    return async function(dispatch){ //매개변수가 dispatch 인건 이해가안감 그리고 return에 바로 함수로 하는것도 
        const bucket_data =await getDocs(collection(db, "dictionary")); //파이어 문서를 다가져옴
        
        // console.log(bucket_data)
        let bucket_list =[];
        bucket_data.forEach((doc,index) => {
            //  console.log(doc.data())
            bucket_list.push({id : doc.id, ...doc.data()})
        });
        bucket_list.sort(function (a,b){
            return b.date - a.date
        })
        console.log(bucket_list)
        dispatch(loadBucket(bucket_list));
    }
}


export const addBucketFB= (bucket) =>{
    return async function(dispatch) {
        const docRef =await addDoc(collection(db, "dictionary"), bucket);
        // const _bucket = await getDoc(docRef)
        const bucket_data = {id: docRef.id, ...bucket};
        // console.log(bucket_data)
        dispatch(createBucket(bucket_data));
    }
}

export const updateBucketFB = (bucket) => {
    return async function (dispatch){
        const docRef =  doc(db,"dictionary", bucket.id)
        await updateDoc(docRef, bucket)

        // await updateDoc(docRef, {
        //     bucket: serverTimestamp()
        // })
        dispatch(updateBucket(bucket))
        // console.log(bucket);

    }

}

export const deleteBucketFB = (bucket_id) =>{
    return async function (dispatch, getState){
       
        const docRef = doc(db,"dictionary", bucket_id);
        await deleteDoc(docRef)

        const _bucket_list = getState().bucket.list
const bucket_index = _bucket_list.findIndex((b)=> {
   return b.id === bucket_id;});
   dispatch(deleteBucket(bucket_index))
   
    }
}



 export default function reducer(state = initialState, action = {}) {
    switch(action.type)
    {
        case 'bucket/CREATE' :{
            // console.log(action.bucket)
            const new_bucket_list =[...state.list, action.bucket];
            // console.log(new_bucket_list)
        return {list : new_bucket_list}
        }

        case 'bucket/LOAD' : {
            return {list: action.bucket_list}
        }

        case 'bucket/UPDATE' : {
            const new_bucket_list = state.list.map((l,idx)=> {
                // console.log(l);
                if(parseInt(action.bucket.index)===idx){
                    return  action.bucket
                } else {return l}
            })
            return {list : new_bucket_list }
        }

        case 'bucket/DELETE' : {
            console.log(state, action)
            const new_bucket_list = state.list.filter((l,idx)=> 
        {   
            return parseInt(action.bucket_index) !== idx;
        });
     console.log(new_bucket_list)
    
            return {...state, list : new_bucket_list};

        }

        default: return state;

    }

 }
