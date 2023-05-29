
import './body.css'
import { useState,useEffect } from 'react'
import { restaurants, IMG_CDN_URL,RESTAURANT_URL } from '../constants'
import Shimmer from '../shimmer/shimmer';
import { Link } from 'react-router-dom';
import {FcSearch} from 'react-icons/fc';

const Body = () => {
  const [searchText,setSearchText] = useState('');
  const [restaurant,setRestaurant]= useState([]);
  const [filteredRestaurant,setFilteredRestaturant] = useState([]);

  useEffect(()=>{
    getRestaurants()
  },[]);

  const getRestaurants=async()=>{
    const data = await fetch(RESTAURANT_URL)
    const jsonData = await data.json();
    setRestaurant(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaturant(jsonData?.data?.cards[2]?.data?.data?.cards);
  }

  const clickHandler = (()=>{
    const filteredList = restaurant.filter((restaurant)=>{
      return restaurant?.data?.name?.toLowerCase().includes(searchText)
    }) 
    setFilteredRestaturant(filteredList)  
  })
  function getValue(){
    console.log("iam calling")
}
const waitFunction = debounce(getValue,300)

function debounce(fn,d){
    let timer;
    return function(){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn()
        },d)
    }
}

  const style = {
    "display": "flex",
    "marginTop": "50px",
    "marginLeft": "50px",
    "flexWrap": "wrap"
  }

  const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating,area,costForTwoString,deliveryTime }) => {
    return (
      <div className="restaurantCard">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <div className="name" style={{ "color": "red" }}>{name}</div>
        <div className="Cuisines">{cuisines.join('')}</div>
        <div className="body-rating">*{avgRating}</div>
        <div className="area">{area}</div>
        <div className="set">
        <div className="offer">{costForTwoString}</div>
        <div className="time">WithIn . {deliveryTime}mins</div>
        </div>
        <div className="link"><a href="#">Quick Order Now</a></div>
        
      </div>
    )
  }
  if(restaurant.length === 0)
  return <Shimmer/>
  return (
    <div className="Restaurants" >
        <div className="searchInput">
          <input type="text" name="search" placeholder="Search Something..." onChange={(e)=>(setSearchText(e.target.value))}value= {searchText} onKeyUp={waitFunction}/>
          <button className="fci" onClick={clickHandler}><FcSearch></FcSearch></button>
        </div>
      <div className="allRestaurants" style={style}>
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link className="line" key={restaurant.data.id} to={"restaurant/"+restaurant.data.id}>
             <RestaurantCard key={restaurant
              .data.id} {...restaurant.data} />
            </Link>

            
          )
        })}
      </div>

    </div>
  )
}
export default Body;