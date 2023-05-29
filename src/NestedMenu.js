import React from "react";
import ItemCards from "./body/itemCards";


const NestedMenu =(props)=>{
    console.log("NestedMenu",props)
    return(
        <>
        {props?.category.map((obj,index)=>{
            return(
                <div key={index}>
                    <div className="categorySection">
                        <h3 className="categoryTitle">{obj.title}</h3>
                        
                        <ItemCards cards={obj?.itemCards}/>
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default NestedMenu;
