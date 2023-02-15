import React from 'react';

export default function Jokes({setup,punchline}){
    return(
        <div>
            <h2>{setup}</h2>
            <h2>{punchline}</h2>
        </div>
    )
}