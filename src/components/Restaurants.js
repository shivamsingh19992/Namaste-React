import {CdnUrl} from './../utils/constants'

export const RestaurantCard = (props) =>{
    const {resData} = props; //object destructuring
    const{name,
        cloudinaryImageId,
        cuisines,
        avgRatingString,
        costForTwo,
        deliveryTime
    }=resData?.info;
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="res-img"
            src={CdnUrl+cloudinaryImageId}/>
             <h3>{name}</h3>
             <h4>{cuisines?.join(',')}</h4>
             <h4>{avgRatingString} stars</h4>
             <h4>{costForTwo}</h4>
        </div>
    )
}

export default  RestaurantCard;