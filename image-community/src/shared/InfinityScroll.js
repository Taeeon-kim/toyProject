import React from "react";
import _ from "lodash";
import { Spinner } from "../elements";

const InfinityScroll = (props) => {

    const {children, callNext, is_next,loading, paging} =props;

    const _handleScroll = _.throttle(() => {
            if(loading){
                return;
            }
            const {innerHeight} =window;
            const {scrollHeight} = document.body;
            const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop

            if(scrollHeight - innerHeight - scrollTop <200 ){
                callNext();
            }
            
    },300);

    const handleScroll = React.useCallback(_handleScroll,[]); //_handleScroll을 지정함으로써 초기화를 막아줌

    React.useEffect(()=>{
        if(loading){
            return;
        }
        if(is_next){
            window.addEventListener("scroll", handleScroll);
        }else{
            window.removeEventListener("scroll", handleScroll);
        }
        
        return ()=> window.removeEventListener("scroll",()=>{})  //WillUnmount 부분이다.
    },[is_next, loading])
    return (
        <React.Fragment>
            {props.children}
            {is_next&& (<Spinner/>)}
        </React.Fragment>
    )
}


InfinityScroll.defaultProps={
    children:null,
    callNext: ()=>{},
    is_next: false,
    loading: false,
    paging: null,
}

export default InfinityScroll;