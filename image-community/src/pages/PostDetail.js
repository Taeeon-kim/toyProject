import React from "react";
import Post from "../components/Post";
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList"
const PostDetail = (props) => {

    return (
        <React.Fragment>
            <Post />
            <CommentWrite />
            <CommentList />
        </React.Fragment>
    )
}

export default PostDetail;