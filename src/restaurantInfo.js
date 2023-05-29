
import './restaurantInfo.css'



const RestaurantInfo = ((props)=>{
    const {info} = props.info;
    console.log("RestaurantInfo",props);
   

    return(
        
           <div>
                <div className="imageSection">              
                    <h1><div>{info.name}</div></h1>
                    <h6><div>{info.cuisines.toString(",")}</div></h6>
                    <h5><div>{info.areaName}</div></h5>
                    <h5>{info.location}</h5>
                    <h3><div className='rating'>*{info.avgRating}</div></h3>
                    <h5><div>{info.feeDetails.message}</div></h5>
                    <hr/>
                 
         
       
        </div>
        </div>
    )
})
          

export default RestaurantInfo;