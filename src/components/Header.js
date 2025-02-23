import { useState } from 'react'
import {LogoUrl} from './../utils/constants'

export default Header = () => {
    const [loginstatus,setLoginStatus]=useState(false);
    return (
        <div className="Header">
            <div className="Logo">
                <img src={LogoUrl}></img>
            </div>
            <div className="NavItems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <button onClick={()=>setLoginStatus(!loginstatus)}>
                        {loginstatus? 'Login':'LogOut'}
                    </button>
                </ul>
            </div>
        </div>
    )
}