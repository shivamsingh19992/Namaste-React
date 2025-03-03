import RestaurantCard from "./Restaurants";
import resobj from "./../utils/MockData";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router";



export default Body = () => {
    //Impotant note: Whenever a variable updates react run reconciliation alog and re renders entire component(triggered by setSomething of useState)
    const [originalList,setOriginalList]=useState([]);
    const [filterList,setfilterList]=useState([]);
    const [isFiltered,setIsFiltered] = useState(false);
    const [searchText,setSearchText] = useState('');
    function filterTopRestaurants(flag){
        if(flag)
        {
            setfilterList(originalList.filter(res=>res.info.avgRating>4.2)) 
        }
        else{
            setfilterList(originalList);
        }
        setSearchText('');
        setIsFiltered(flag);
    }

    function filterBySearch(searchText){
        setfilterList(!!searchText ? originalList.filter(restaurant=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())) : originalList)
    }
    //if no dependency array useEffect calls on every render of body component
    //if empty dependency array useEffect calls on only intitial render of body component
    //if some dependency array useEffect calls on change of that dependency inside body component(there can be multiple dependency)
    useEffect(()=>{
        fetchData();

        return ()=>{       //for unmounting phase 
        }
    },[])

    const fetchData = async ()=>{
       const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4490505&lng=77.06662829999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');       
       const json = await data.json();
       const datas = json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
       console.log(datas);
       setOriginalList(datas);
       setfilterList(datas);
    }

    if(originalList.length ===0){       ///create a shimmer ui to render skeleton until data fetches
        return <ShimmerUI/>
    }

  return (
    <div className="Body">
      <div className="Filter-top-res">
        <button
          onClick={()=>filterTopRestaurants(!isFiltered)
          }
        >
          {isFiltered ? 'Reset' : 'Filter Top Restaurant'}
        </button>
        <button className="search-bar" onClick={()=>filterBySearch(searchText)}>
            <input type='text'  value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
            Submit
        </button>
      </div>
      <div className="res-conatiner">
        {filterList.map((restaurant) => (
          <Link key={restaurant.info.id} to={'/restaurant/'+restaurant.info.id}><RestaurantCard
          key={restaurant.info.id}
          resData={restaurant}
        /></Link>
        ))}
      </div>
    </div>
  );
};
