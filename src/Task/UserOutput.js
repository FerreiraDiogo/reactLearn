import React from 'react'

const userOutput = (props) => {
    return(
        <div>
            <h3>texto do usuario {props.name}</h3>
            <p>{props.t1}</p>
            <p>{props.t2}</p>
        </div>
    );
};

export default userOutput;