import { useParams } from "react-router"
import { MenuApi } from "./constants";
import { useEffect, useState } from "react";

export const useRestaurantMenu =(resid)=>{
    const [resinfo,setResinfo]=useState(null)
    useEffect(() => {
        getMenudata();
    }, [])
    
    async function getMenudata() {
        debugger;
        console.log(MenuApi+resid);
        const menu = await fetch(MenuApi+resid);
        const json = await menu.json();
        setResinfo(json);
    }

    return resinfo;
}