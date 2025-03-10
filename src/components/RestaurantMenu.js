import {useParams} from 'react-router'
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu=()=>{
    debugger;
    const {resId} = useParams();

    //custom hook for restaurant menu
    const resMenu = useRestaurantMenu(resId)

    if(resMenu===null)
        return <ShimmerUI/>;
    const listofMenu = resMenu?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(x=> x.card.card?.itemCards?.length>0);
    const nameOfRestaurant = resMenu?.data.cards[0].card.card.text;

    if(!listofMenu || !nameOfRestaurant)
        return;
    
    return(
        <div>
            <div>
                {nameOfRestaurant}
            </div>
            <ul/>
            {listofMenu.map(label=>{
                return(
                    <ul key={label.card.card.categoryId}>
                    {label.card.card.itemCards.map(item=>{
                        return(
                            <li key={item.card.info.id}>
                                {item.card.info.name}
                                <h4>{item.card.info.description}</h4>
                                <h2>{item.card.info.defaultPrice}</h2>
                            </li>
                        )
                    })}
                    </ul>)
            })}
            <ul/>
        </div>
    )
}

export default RestaurantMenu;