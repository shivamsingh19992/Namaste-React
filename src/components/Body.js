import RestaurantCard from "./Restaurants";
import resobj from "./../utils/MockData";
import { useState } from "react";



export default Body = () => {

    const [filterList,setfilterList]=useState(resobj);
    console.log(useState(resobj));
    const [isFiltered,setIsFiltered] = useState(false);
    function handleFilterClick(flag,originalarray){
        if(flag)
        {
            setfilterList(originalarray.filter(res=>res.info.avgRating>4.2)) 
        }
        else{
            setIsFiltered(resobj);
        }
        setIsFiltered(!flag);

    }
  return (
    <div className="Body">
      <div className="Filter-top-res">
        <button
          onClick={()=>handleFilterClick(!isFiltered,resobj)
          }
        >
          {isFiltered ? 'Reset' : 'Filter Top Restaurant'}
        </button>
      </div>
      <div className="res-conatiner">
        {filterList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant}
          ></RestaurantCard>
        ))}
      </div>
    </div>
  );
};
