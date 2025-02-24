import { useEffect, useState } from "react";
import {useParams} from 'react-router'
import { MenuApi } from "../utils/constants";

const RestaurantMenu=()=>{
    const [listofMenu,setListofMenu]=useState(null);
    const [nameOfRestaurant,setNameofRestaurant] = useState('');

    console.log(useParams())
    const {resId} = useParams();
    useEffect(()=>{
        getMenudata();
    },[])
    async function getMenudata() {
        debugger;
        console.log(MenuApi+resId);
        const menu = await fetch(MenuApi+resId);
        const json = await menu.json();
        console.log(json);
        const listofMenu = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(x=> x.card.card?.itemCards?.length>0);
        console.log(listofMenu);
        setListofMenu(listofMenu);
        setNameofRestaurant(json.data.cards[0].card.card.text);
    }

    if(listofMenu===null | nameOfRestaurant==='')
        return;
    
    return(
        <div>
            <div>
                {nameOfRestaurant}
            </div>
            {listofMenu.map(label=>{
                return(
                    <li key={label.card.card.categoryId}>
                    {label.card.card.itemCards.map(item=>{
                        return(
                            <li key={item.card.info.id}>
                                {item.card.info.name}
                                <h4>{item.card.info.description}</h4>
                                <h2>{item.card.info.defaultPrice}</h2>
                            </li>
                        )
                    })}
                    </li>)
            })}
        </div>
    )
}

export default RestaurantMenu;