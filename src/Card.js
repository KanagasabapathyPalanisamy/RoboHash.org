import React from 'react';
function Card(props){
    return (
        <div className="vj">
<img src={`https://robohash.org/${props.age}?set=set5`}width="210"/>
            <p>{props.name}</p>
           <p>{props.TsNo}</p>
    </div>
    )

}
export default Card;