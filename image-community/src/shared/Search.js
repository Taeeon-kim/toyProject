import React from "react";
import _ from "lodash"  //이곳에 unbounce 랑 throttle 들어있다.


const Search = () => {
    const [text, setText] = React.useState("");
    const debounce = _.debounce((e)=> {console.log("debounce :::", e.target.value)}, 1000) // 설정해준 2번째 인자값 milliisecond 만큼 후에 불러와줌. 이벤트가 발생하는동안은 시간이 발동안하다가 타입이 끝나면 그 시간으로부터 200millisecond 후 실행
    const throttle = _.throttle((e)=> {console.log("throttle :::",e.target.value)}, 1000); //이벤트가 계속 발생해도 설정한 시간이되면 그걸 불러와줌
    
    const keyPress = React.useCallback(debounce, []);  
    const onChange= (e) => {
        // console.log(e.target.value);
        setText(e.target.value);     // 요렇게 state을 Set할경우 debounce가 원래대로 작동안하고 입력한대로 계속 출력해준다 이유는 search 컴포넌트가 함수형 컴포넌트이기떄문이다. 리랜더링될때 변수들도 초기화되기때문에 1초를 기다리지않고 다 뽑아낸다.
        // debounce(e);
        // console.log(text)
        keyPress(e);
    }

    
    return (
        <div>
            <input type= "text" onChange={onChange} value={text} />
        </div>
    )
}

export default Search;