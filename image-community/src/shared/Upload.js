import React from "react";
import { Button } from "../elements";
import { storage } from "./firebase";
import {actionCreators as imageActions} from "../redux/modules/image"
import { useDispatch } from "react-redux";

const Upload = (props) => {
    const fileInput =React.useRef();
    const dispatch = useDispatch();
    const selectFile = (e) =>{
        console.log(e);
        console.log(e.target);
        console.log(e.target.files)
        console.log(fileInput.current.files[0])
    }

    const uploadFB=()=>{
        let image = fileInput.current.files[0];
        dispatch(imageActions.uploadImageFB(image))
      
    }

    return (
        <React.Fragment>
            <input type="file" onChange={selectFile} ref={fileInput} />
            <Button _onClick={uploadFB}>업로드 하기</Button>
        </React.Fragment>
    )
}

export default Upload;