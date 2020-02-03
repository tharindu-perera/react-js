import React  from 'react'
import ReactDOM from 'react-dom'
 // import './index.css'
// import App from  './App'
// import Table from "./Table";
import Game from "./state-management/game-baord-state-management";
// import  * as say  from "./All"
// import {loadScript} from './callbacks'
// import * as ss from './promise'
// import  * as f from './fetchExample'
// import * as api from  './promise-api'

// import "./prototypes";
// import "./Cookies";
// import "./websocket";
// import "./Class";
// import "./objectExample";

// ReactDOM.render(<App/> ,document.getElementById("root"))


//callback example
// import {loadScript} from "./callbacks";

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', aaa => alert(`${aaa.src}`) );

//promise example

ReactDOM.render(<Game/>,
    document.getElementById('root')
);
