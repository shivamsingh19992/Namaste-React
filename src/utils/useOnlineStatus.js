import { useEffect, useState } from "react";

export const useOnlineStatus =()=>{
    //if customer if online return true else false
    const [onlineStatus,setOnlineStatus]=useState(true);

    useEffect(() => {
        window.addEventListener("online",()=>setOnlineStatus(true));
        window.addEventListener("offline",()=>setOnlineStatus(false))
    }, [])

    return onlineStatus;
}