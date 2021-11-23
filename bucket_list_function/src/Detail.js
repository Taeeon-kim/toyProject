import React from "react";

import {useParams, useHistory} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import { deleteBucket, deletebucketFB, updateBucket, updateBucketFB, } from "./redux/modules/bucket";
// import Button from '@material-ui/core/Button';
import Button from '@mui/material/Button';

const Detail = (props) => {
    const dispatch =useDispatch();
    const params = useParams();  //App.js에 path 부분보면 :index 라고있음 뒤에 붙는걸 params로 쓴다는것
    const bucket_index = params.index;
    const bucket_list = useSelector((state) => state.bucket.list)
    console.log(bucket_index)
    console.log(bucket_list[bucket_index])
    const history = useHistory();
    // const removeBucketList = () => {
    //     // 스프레드 문법! 기억하고 계신가요? :) 
    //     // 원본 배열 list에 새로운 요소를 추가해주었습니다.
    //     dispatch(removeBucket(text.current.value));
    //     // setList([...list, text.current.value]);
    //     }
    // 아래 삼항연산자를 쓴이유는 dispatch를 그아래 넣어줬는데 데이터를 가져오는데 시간이 걸리지만 <h1> 부분의 bucket_list는 바로 화면에 뿌려줄려고한다 따라서 undefined 에러가 뜨므로 있으면 출력 없으면 "" 빈공간출력해주게 해준다. 
    return (<div><h1> {bucket_list[bucket_index]? bucket_list[bucket_index].text : ""}</h1>  
    <Button variant="outlined" color="primary " onClick={()=>{
        // dispatch(updateBucket(bucket_index)); 
        dispatch(updateBucketFB(bucket_list[bucket_index].id))

    }}>완료하기</Button>
    <Button variant="outlined" color="error" onClick={()=>{
        console.log("삭제버튼누름")
        // dispatch(deleteBucket(bucket_index))  //요건 리덕스스토어 부분이다, 우리는 파이어스토어로 실시간 데이터로 사용해야한다.
        dispatch(deletebucketFB(bucket_list[bucket_index].id))  //이렇게하면 파이어스토어에 있는 데이터가 없어진다, 하지만 아직 리덕스와 연결안되어있어서 실시간으로 바뀌진않고 새로고침하면 사라지는걸 볼수있다. 
        history.push("/");
    }}>삭제하기</Button>
        </div>
    )

}

export default Detail; 