import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router"
import  ContactUs  from "./components/ContactUs";
import ErrorBoundary from "./components/ErrorBoundary";
import RestaurantMenu from "./components/RestaurantMenu";

const Applayout = () =>{
    return(
        <div className="App">
            <Header/>
            <Outlet/>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path:'/',
        element:<Applayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contactus',
                element:<ContactUs/>
            },
            {
                path:'/restaurant/:resId',
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<ErrorBoundary/>
    }
])
const rectel = React.createElement("h1",{id:"heading"},"Hello Eorld");
const dom = ReactDOM.createRoot(document.getElementById("root"));
dom.render(<RouterProvider router={router}/>);

