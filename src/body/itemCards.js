import { IMG_CDN_URL } from "../constants";
import noImage from "./noImage.jpg";
 import { addItem } from"../utils/cartSlice";
import { useState,useEffect } from "react";
 import { Link, useParams } from "react-router-dom";
 import { useDispatch } from "react-redux";
 import { MENU_URL } from "../constants";
import Cart from "../cart";
import { appRouter } from "../appRouter";
import { useNavigate } from "react-router-dom";

// import  useHistory ,{Link} from "react-router-dom";


 



const ItemCards =(props)=>{
    console.log("ItemCards",props);
  

    const params = useParams();
    const [restaurant, setRestaurant] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleAdd = (item) => {
      dispatch(addItem(item));
      navigate("/cart")
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

    return(
        <>
        {props?.cards?.map((item) => {
                return (
                  <div key={item?.info?.id}>
                    <div className="group">
                      <div className="info">
                        <div className="head">
                          <h3>{item?.card?.info?.name}</h3>
                          {console.log("infoName",item.card.info.name)}
                        </div>

                        <h6 className="description">
                          {item?.card?.info?.description}
                        </h6>

                        <p className="">
                          price :₹
                          {item.card.info.price / 100}
                        </p>
                      </div>
                      <div className="imgSec">
                        <div>
                          {item?.card?.info?.imageId ? (
                            <img
                              className="img"
                              src={IMG_CDN_URL + item.card.info.imageId}
                              alt="food"/>
                          ) : (
                            <img className="img" src={noImage} />
                          )}
                        </div>
                        <button  onClick={()=>handleAdd(item)} className="btn">Add</button>
                        
                        
                        <br />
                        <br />
                        <hr />
                      </div>
                    </div>
                  </div>
                );
              })}
        </>
    )
}

export default ItemCards;