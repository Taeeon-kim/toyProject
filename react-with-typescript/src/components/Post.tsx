import React from "react";

import header_profile from "../static/image/header_profile.svg";
import heart_fill from '../static/image/heart-fill.svg'
import {PostPropsType} from '../types/interfaces'

const Post: React.FC<PostPropsType> = (props) => {
  return (
    <div style={{ display: "flex", justifyContent:"center", margin:"5px 0px", border:"1px solid black"}}>
      <img
        src={header_profile}
        alt="restaurant"
        width="89px"
        height="89px"
      ></img>
      <div className="content" style={{ margin:"5px 22px" }}>
        <div className="restaurant_name" style={{fontSize:"20px", fontWeight:"bold"}}>{props.restaurant_name}</div>
        <div className="address">{props.address}</div>
      </div>
      <div className="like" style={{ display:"flex", alignItems: "center" }}>
          <img src={heart_fill} alt="heart" />
      </div>
    </div>
  );
};

export default Post;
