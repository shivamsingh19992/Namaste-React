import React from "react";
import  ReactDOM  from "react-dom/client";
/*
How to represent actual html elements using react:

Ex:
<div id="parent">
        <div  id ="child1">
            <h1>
            I am h1 tag
            </h1>
            <h2>
            I am h2 tag
            </h2>
        </div>
        <div  id ="child2">
            <h3>
            I am h3 tag
            </h3>
            <h4>
            I am h4 tag
            </h4>
        </div>
</div>

Code  is below

The Solution to this nested code is JSX

Important note:
<div id="root">
        <h1>
            Shiv
        </h1>
    </div>

    Question:Here id root div already has h1 tag at index.html....and we also render id root in app.js....so what wll happen?
    Answer: The content of root will be replaced by newly rendered object as the code will be excuted line be line.
    1st h1 executed then react scripts unpacked and then react obj repace hi tag at root.

*/

const parent = React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child1"},[
    React.createElement("h1",{},"I am H1 tag"),
    React.createElement("h2",{},"I am H2 tag")]),
React.createElement("div",{id:"child2"},[
    React.createElement("h3",{},"I am H3 tag"),
    React.createElement("h4",{},"I am H4 tag")
])]);


const heading = React.createElement("h1",{id:"heading"}, "Hello World!");  //{} is basically the place where u give attributes to tags like define id:"something" inside
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);