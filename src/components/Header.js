import {LogoUrl} from './../utils/constants'

export default Header = () => {
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
                </ul>
            </div>
        </div>
    )
}