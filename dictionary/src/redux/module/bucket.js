


const LOAD = 'bucket/LOAD'; // 서버에서 가져오거나 할때 쓴다 그래서 지워도된다. 
const CREATE = 'bucket/CREATE';  // 생성,추가 기능이므로 킵해놓는다.


const initialState = {    //초기 state 객체 만들어줌.
    list : [{ name : "영화관 가기" , desc : "이렇게", ex : "aaa" }, 
            { name : "수영 배우기", desc :"설명을", ex : "bbb" },
            { name : "코딩하기" , desc :"하나씩", ex :"ccc" } ,
            { name : "테스트", desc :"넣자" ,ex : "ddd"} 
        ]
           
}



 //create 액션 생성함수
 export function createBucket(bucket)
 { console.log("액션생성")
 console.log(bucket)
     return  {type: CREATE, bucket } 
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

        default: return state;

    }

 }
