import React from "react";
import Post from "../components/Post";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import Permit from "../shared/Permit";
import {useSelector,useDispatch} from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import {firestore} from "../shared/firebase";

const PostDetail = (props) => {
    const id = props.match.params.id;
    const dispatch =useDispatch();
    const user_info = useSelector((state) => state.user.user);

    const post_list = useSelector(store => store.post.list);
    // console.log(post_list)
    const post_idx = post_list.findIndex(p => p.id === id);
    const post = post_list[post_idx];

    // const [post, setPost] = React.useState(post_data? post_data : null);


    React.useEffect(() => {

        if(post){
           return; 
        }
        dispatch(postActions.getOnePostFB(id));
        
    }, []);

    return (
      <React.Fragment>
        {post && (
          <Post {...post} is_me={post.user_info.user_id === user_info.uid}/>
        )}
        <Permit>
        <CommentWrite post_id={id}/>
        </Permit>
        <CommentList post_id={id}/>
      </React.Fragment>
    );
}

export default PostDetail;