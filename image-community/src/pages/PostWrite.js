import React from 'react';
import {Grid, Text, Button, Image, Input} from "../elements";
import Upload from '../shared/Upload';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as postActions} from '../redux/modules/post';
const PostWrite = (props) => {
    const dispatch = useDispatch();
    const is_login = useSelector((state)=> state.user.is_login); // 여기서 이미 is_login 으로 로그인 확인한다.
    const preview = useSelector((state)=> state.image.preview);
    const {history} =props;
    const [contents, setContents] = React.useState("");
    const changeContents = (e) =>{
        setContents(e.target.value);
        
    }
    const addPost = () => {
        dispatch(postActions.addPostFB(contents));
    }

    // console.log(history)
    if(!is_login){
        return(
            <Grid margin="100px 0px" padding="16px" center>
            <Text size="32px" bold>잠시만요!</Text>
            <Text size="16px">로그인후에만 글 쓰기 가능</Text>
            <Button _onClick={()=>{history.replace('/login')}}>로그인 하러가기</Button>
        </Grid>
        )
       
    }
    return (
        <React.Fragment>
            <Grid padding="16px">
                <Text size="36px" bold>게시글 작성</Text>
                <Upload/>                      {/*파일선택하는 버튼 */}
            </Grid>
            <Grid >
                <Grid padding= "16px" bold>
                    <Text margin="0px" size="24px" bold>미리보기</Text>
                </Grid>
                <Image width="50%" shape="rectangle" src={preview? preview: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Octicons-cloud-upload.svg/1200px-Octicons-cloud-upload.svg.png"}/>
            </Grid>
            <Grid padding="16px">
                <Input _onChange={changeContents}  label="게시글 내용" placeholder="게시글 작성" multiLine/>
            </Grid>

            <Grid padding="16px">
                <Button text="게시글 작성" _onClick={addPost} ></Button>
            </Grid>
        </React.Fragment>
    )
}

export default PostWrite;