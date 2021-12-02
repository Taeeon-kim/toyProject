import React from "react";
import { Grid, Text, Button, Image, Input } from "../elements";
import Upload from "../shared/Upload";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";
const PostWrite = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login); // 여기서 이미 is_login 으로 로그인 확인한다.
  const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.list);
//   console.log(props.match.params.id);

  const post_id = props.match.params.id;
  const is_edit = post_id ? true : false;

  const { history } = props;

  let _post = is_edit ? post_list.find((p) => p.id === post_id) : null; //find함수는 조건문에 해당하는 값 첫번째거를 반환해준다. 리덕스스토어에 있는 p.id 값과 url params로 넘어온 id값을 비교하여 같다면 수정게시물이 뜨도록해준다.
//   console.log(_post);
  const [contents, setContents] = React.useState(_post?_post.contents:"");

  React.useEffect(() => {
    if (is_edit && !_post) {
      console.log("포스트 정보가 없어요.");
      history.push("/");
    }

    if(is_edit){
        dispatch(imageActions.setPreview(_post.image_url));
           }
  }, []);
  const changeContents = (e) => {
    setContents(e.target.value);
  };
  const addPost = () => {
    dispatch(postActions.addPostFB(contents));
  };
  const editPost = () =>{
      dispatch(postActions.editPostFB(post_id, { contents:contents }))
  }
  // console.log(history)
  if (!is_login) {
    return (
      <Grid margin="100px 0px" padding="16px" center>
        <Text size="32px" bold>
          잠시만요!
        </Text>
        <Text size="16px">로그인후에만 글 쓰기 가능</Text>
        <Button
          _onClick={() => {
            history.replace("/login");
          }}
        >
          로그인 하러가기
        </Button>
      </Grid>
    );
  }
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="36px" bold>
          {is_edit? "게시글 수정" : "게시글 작성" }
        </Text>
        <Upload /> {/*파일선택하는 버튼 */}
      </Grid>
      <Grid>
        <Grid padding="16px" bold>
          <Text margin="0px" size="24px" bold>
            미리보기
          </Text>
        </Grid>
        <Image
          width="50%"
          shape="rectangle"
          src={
            preview
              ? preview
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Octicons-cloud-upload.svg/1200px-Octicons-cloud-upload.svg.png"
          }
        />
      </Grid>
      <Grid padding="16px">
        <Input
            value={contents}
          _onChange={changeContents}
          label="게시글 내용"
          placeholder="게시글 작성"
          multiLine
        />
      </Grid>

      <Grid padding="16px">
        {is_edit? <Button text="게시글 수정" _onClick={editPost}></Button>:<Button text="게시글 작성" _onClick={addPost}></Button> }
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
