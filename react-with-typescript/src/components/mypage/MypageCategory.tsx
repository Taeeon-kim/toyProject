import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MypageCategoryType } from "../../types/interfaces";



 interface clicked {
  clicked: string
 }
  
const MypageCategory: React.FC<MypageCategoryType> = (props) => {
  const { setCategory, category } = props;

  return (
    <div
      style={{
        display: "flex",
        color: "#E22F2F",
        fontSize: "25px",
        fontWeight: "bold",
        justifyContent: "center",
      }}
    >
      <Element onClick={() => setCategory("edit_profile")} clicked={category}>
        내 정보
      </Element>
      <Element onClick={() => setCategory("favorite_list")} clicked={category}>
        내 찜 목록
      </Element>
      <Element
        onClick={() => setCategory("favorite_list_map")}
        clicked={category}
      >
        나만의 맛집 지도
      </Element>
    </div>
  );
};

const Element = styled.div`
  margin: 0 10px;
  &:hover {
    cursor: pointer;
  }
  &:nth-child(1) {
    background-color: ${(props: clicked) =>
      props.clicked === "edit_profile" ? "yellow" : "white"};
  }
  &:nth-child(2) {
    background-color: ${(props: clicked) =>
      props.clicked === "favorite_list" ? "yellow" : "white"};
  }
  &:nth-child(3) {
    background-color: ${(props: clicked) =>
      props.clicked === "favorite_list_map" ? "yellow" : "white"};
  }
`;

export default MypageCategory;
