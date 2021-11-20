import React from "react";

import {useParams, useHistory} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import { deleteBucket } from "./redux/modules/bucket";
const Detail = (props) => {
    const dispatch =useDispatch();
    const params = useParams();
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

    return (<div><h1> {bucket_list[bucket_index]}</h1>
    <button onClick={()=>{
        console.log("삭제버튼누름")
        dispatch(deleteBucket(bucket_index))
        history.push("/");
    }}>삭제하기</button>
        </div>
    )

}

export default Detail; 