import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1", {id:"heading"}, "Hello World From React!");

console.log(heading);// return the object
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // accepts an object and return the html h1 tag which browser understands

 
 

    const parent = React.createElement( "div",{id:"parent"},[
        React.createElement("div",{id:"child"},[ 
        React.createElement("h1",{},"I am a h1 Tag"),
        React.createElement("h2",{},"I am a h2 Tag")]),

        React.createElement("div",{id:"child"},[ 
            React.createElement("h1",{},"I am a h1 Tag"),
            React.createElement("h2",{},"I am a h2 Tag")]),
    ]);

    root.render(parent);