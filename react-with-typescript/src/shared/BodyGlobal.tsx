import React from 'react';

const BodyGlobal: React.FC = (props)=>{
    return(<div style={{
        margin:"100px 0px"
    }}>
        {props.children}
    </div>)
}

export default BodyGlobal;