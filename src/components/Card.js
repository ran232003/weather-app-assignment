import React from "react";
import FavoriteComponent from "./FavoriteComponent";
import WeatherCard from "./WeatherCard";
import "./Card.css"
import WeatherHeader from "./WeatherHeader";
import { useSelector } from "react-redux";
const Card = ()=>{
    const weather = useSelector((state)=>{
        return state.weather
    })
    console.log(weather)
    return(
        <div className="card">
            <div className="first-line">
                <WeatherCard 
                header = {weather.currentWeather.WeatherText}
                city = "Tel Aviv"
                date = {weather.currentWeather.LocalObservationDateTime}
                icon = {weather.currentWeather.WeatherIcon}
                temperature = {weather.currentWeather.Temperature.Metric.Value}
                />
             <FavoriteComponent/>
             
             </div>
             <div className="centerText">
             <WeatherHeader header = {weather.currentWeather.WeatherText}/>
             </div>
        </div>
    )
}
export default Card;