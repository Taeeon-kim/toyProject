import React, { useState, useEffect } from "react";

import Post from "../Post";
const FavoriteList: React.FC = (props) => {
  const [exampleData, setExampleData] = useState({
    id: "testId",
    nickname: "testName",
    like_list: [
      {
        restaurant_name: "테스트식당1",
        img: "이미지 URL",
        address: "서울특별시 가나다라 마바사 123-456",
        star: 77,
        options: {
          takeout: true,
          parking: true,
          pet: false,
          nokids: true,
        },
      },
      {
        restaurant_name: "테스트식당2",
        img: "이미지 URL",
        address: "서울특별시 아자차 카타파하 999-999",
        star: 50,
        options: {
          takeout: false,
          parking: true,
          pet: false,
          nokids: true,
        },
      }
    ],
  }); // 나중에 api로 데이터 받아오면 그값들 넣어주기, 그리고 이 샘플 useState는 나중에 지우기
   //useSelector 로 내찜목록 정보 가져오기
   //스피너 처리 나중에할것
  const list = exampleData.like_list;

  return (
    <div style={{ border: "1px solid black" }}>
      {list.map((data, idx) => (
        <Post key={idx} {...data} />
      ))}
    </div>
  );
};

export default FavoriteList;
