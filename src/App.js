import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
    

const Applayout = () =>{
    return(
        <div className="App">
            <Header/>
            <Body/>
        </div>
    )
}
const rectel = React.createElement("h1",{id:"heading"},"Hello Eorld");
const dom = ReactDOM.createRoot(document.getElementById("root"));
dom.render(<Applayout/>);

