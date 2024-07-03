import React from 'react';

const Error=(props)=>{
    return(
        <div className="text-center m-auto">
            <h1>{props.error}</h1>
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
        </div>
    );
}

export default Error;