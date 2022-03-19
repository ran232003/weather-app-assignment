import React from "react";
import FavoriteComponent from "./FavoriteComponent";
import WeatherCard from "./WeatherCard";
import "./Card.css"
const Card = ()=>{
    return(
        <div className="card">
            <div className="first-line">
                <WeatherCard/>
             <FavoriteComponent/>
             
             </div>
        </div>
    )
}
export default Card;