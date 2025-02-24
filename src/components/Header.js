import { useState } from 'react'
import { Link } from 'react-router';
import {LogoUrl} from './../utils/constants'

//note: We use link over href because link refreshes the page and re-renders all the components whereas link only renders new components keeps intact already in use component
export default Header = () => {
    const [loginstatus,setLoginStatus]=useState(false);
    return (
        <div className="Header">
            <div className="Logo">
                <img src={LogoUrl}></img>
            </div>
            <div className="NavItems">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About Us</Link></li>
                    <li><Link to='/ContactUs'>Contact Us</Link></li>
                    <button onClick={()=>setLoginStatus(!loginstatus)}>
                        {loginstatus? 'Login':'LogOut'}
                    </button>
                </ul>
            </div>
        </div>
    )
}