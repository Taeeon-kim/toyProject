import React from "react";
import { Button } from "../elements";
import { storage } from "./firebase";
import {actionCreators as imageActions} from "../redux/modules/image"
import { useDispatch, useSelector } from "react-redux";
import { current } from "immer";

const Upload = (props) => {
    const fileInput =React.useRef();
    const dispatch = useDispatch();
    const is_uploading = useSelector((state)=> state.image.uploading);
    

    const selectFile = (e) =>{
        console.log(e);
        console.log(e.target);
        console.log(e.target.files);
        console.log(fileInput.current.files[0]);

        const reader = new FileReader(); //파일을 읽어오기위해 FileReader를 사용하여 reader변수에 초기화해줌.
        const file = fileInput.current.files[0]; // 위에 선택된 파일의 값을 변수 file에 넣어준다.

        reader.readAsDataURL(file);   //reader안에 readAsDataURL 를 사용하여 위의 file을 읽어온다.
        reader.onloadend = () =>{  //위에 read가 끝나면은 실행이되는 onloadend 를 사용
            console.log(reader.result)    //result 는 reader 안에  결과를 가진애인다.
            dispatch(imageActions.setPreview(reader.result)) // 따라서 그 result 값을 setPriview 액션 매개변수로 넣어주고 dispatch 해준다.
        }

    }

    const uploadFB=()=>{
        let image = fileInput.current.files[0];
        dispatch(imageActions.uploadImageFB(image))
      
    }

    return (
        <React.Fragment>
            <input type="file" onChange={selectFile} ref={fileInput} disabled={is_uploading}/>
            <Button _onClick={uploadFB}>업로드 하기</Button>
        </React.Fragment>
    )
}

export default Upload;