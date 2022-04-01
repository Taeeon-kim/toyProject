import React, {useState, useEffect} from "react";
import Editprofile from "../components/mypage/EditProfile";
import FavoriteList from "../components/mypage/FavoriteList";
import FavoriteListMap from "../components/mypage/FavoriteListMap";

import MypageCategory from "../components/mypage/MypageCategory";



const Mypage: React.FC =(props) =>{
const [category, setCategory] = useState<string>('edit_profile');

useEffect(()=>{
    // 모든 정보 get 요청 해서 redux 에 저장해놓기
},[])
    return(<div>
        <MypageCategory setCategory={setCategory} category={category}/>
        {category==='edit_profile'&&<Editprofile />}
        {category==='favorite_list'&&<FavoriteList />}
        {category==='favorite_list_map'&&<FavoriteListMap /> }
    </div>)
}

export default Mypage;