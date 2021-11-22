// widgets.js

// Actions
// const LOAD = 'my-app/widgets/LOAD'; // 서버에서 가져오거나 할때 쓴다 그래서 지워도된다. 
const CREATE = 'bucket/CREATE';  // 생성,추가 기능이므로 킵해놓는다.
const UPDATE = 'bucket/UPDATE';   // 우리에게 없는 기능
const DELETE = 'bucket/DELETE';   // 우리에게 없는 기능

const initialState = { 
    list : [ 
        { text :"영화관 가기", completed : false},
        { text :"매일 책읽기", completed : false},
        { text :"수영 배우기", completed : false},
        { text :"코딩하기", completed : false}
        ]
    
    // list: ["영화관 가기", "매일 책읽기", "수영 배우기", "코딩하기"]
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

// Reducer
export default function reducer(state = initialState, action = {}) {    // 만약 초기값이 없으면 {} 으로 만들어놓고 빈 딕셔너리라 라고 알려준다 왜나하면 보통 안들어있으면 default로 정의되는데 그 블록안에 실행이 연산을 통한것이라면 에러가 나니 미리 빈공간이라고 선언
switch (action.type) {
    case "bucket/CREATE" : {
        console.log(state)
        const new_bucket_list =[...state.list, action.bucket]; //기존 state에 있는 list 를 설정해주고, 새로만들 bucket 을 action 과 쓴다
        console.log(new_bucket_list)
        return {list : new_bucket_list}; // 새로운게 추가된게 들어갈 배열을 만듬, 새로운 상태값 리턴
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
        return {list : new_bucket_list}
    }
    
    case "bucket/DELETE" : {
        console.log(state, action)
        const new_bucket_list = state.list.filter((l,idx)=> 
    {   console.log(parseInt(action.bucket_index)!==idx,parseInt(action.bucket_index), idx);
        return parseInt(action.bucket_index) !== idx;
    });
 console.log(new_bucket_list)

        return {list : new_bucket_list}; // 새로운게 추가된게 들어갈 배열을 만듬, 새로운 상태값 리턴
    }

    // do reducer stuff
default: return state;
}
}


// export function createWidget(widget) {
// return { type: CREATE, widget };            //key 와 value 가 똑같으면 스킵할수있음 예를들어 widget : widget 처럼 같으면 그냥 widget 인것이다.
// }
