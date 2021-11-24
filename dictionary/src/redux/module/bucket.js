


const LOAD = 'bucket/LOAD'; // 서버에서 가져오거나 할때 쓴다 그래서 지워도된다. 
const CREATE = 'bucket/CREATE';  // 생성,추가 기능이므로 킵해놓는다.


const initialState = {    //초기 state 객체 만들어줌.
    list : [ "영화관 가기", "매일 책읽기", "수영 배우기", "코딩하기"]
 }


 //create 액션 생성함수
 export function createBucket(bucket)
 { console.log("액션생성")
     return  {type: CREATE, bucket : bucket } 
 }



 export default function reducer(state = initialState, action = {}) {
    switch(action.type)
    {
    
        default: return state;

    }

 }
