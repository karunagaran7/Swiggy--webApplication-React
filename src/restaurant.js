import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MENU_URL, restaurants } from "./constants";
import { IMG_CDN_URL, RESTAURANT_URL } from "./constants";
import Shimmer from "./shimmer/shimmer";
import "./restaurant.css";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";
import { VscLocation } from "react-icons/vsc";
import { GrNavigate } from "react-icons/gr";
import { FcRating } from "react-icons/fc";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { GiChickenOven } from "react-icons/gi";
import { TfiMoney } from "react-icons/tfi";
import { removeItem } from "./utils/cartSlice";
import RestaurantInfo from "./restaurantInfo";
import GroupCard from "./groupCard";

const Restaurant = () => {
  const params = useParams();
  const [restaurant, setRestaurant] = useState([]);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };
  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(MENU_URL + params.id);
    const jsonData = await data.json();
    console.log("jsonValue", jsonData);
    setRestaurant(jsonData.data.cards);
    console.log("demo", restaurant);
  };
  if (Object.values(restaurant).length < 1) return <Shimmer />;

  return (
    <div className="restaurantSection">
      <div>
        <RestaurantInfo info={restaurant[0].card.card}></RestaurantInfo>

      </div>
        
      <div>
        <GroupCard
          cards={restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards}
        ></GroupCard>
         {console.log("group", restaurant[2].groupedCard.cardGroupMap.REGULAR.cards)}
      </div>

      
      <div className="restaurantMenu">
        {/* <restaurantMenu
          data={
            restaurant?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR
              ?.cards
          }>
          {console.log("data", restaurant.cards[3].groupedCard.cardGroupMap.REGULAR
          .cards)}
          
        </restaurantMenu>

        <div className="restaurantMenu"></div> */}
        
      </div>
    </div>
  );
};

export default Restaurant;
