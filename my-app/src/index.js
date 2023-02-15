import React from "react";
import ReactDOM from "react-dom";
import Jokes from "./Jokes";


function Page(){
    return(
<div>
    <h2>list of jokes</h2>
<Jokes
       setup='why do girl scratch their eyes when they wake up in the mornin'
       punchline='because the have no balls to scratch'
       />
       <Jokes
       setup='why do girl scratch their eyes when they wake up in the mornin'
       punchline='because the have no balls to scratch'
       />
       <Jokes
       setup='why do girl scratch their eyes when they wake up in the mornin'
       punchline='because the have no balls to scratch'
       /> 
    </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Page/>
  );