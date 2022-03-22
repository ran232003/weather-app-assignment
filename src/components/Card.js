import React, { useEffect } from "react";
import FavoriteComponent from "./FavoriteComponent";
import WeatherCard from "./WeatherCard";
import "./Card.css"
import WeatherHeader from "./WeatherHeader";
import { useDispatch, useSelector } from "react-redux";
import WeatherList from "./WeatherList";
import HorizontalScroll from 'react-scroll-horizontal'
import { Spinner } from "react-bootstrap";
import { weatherActions } from "../store/weatherSlice";
const Card = ()=>{
    const weather = useSelector((state)=>{
        return state.weather
    })
    const dispatch = useDispatch()
    const checkFavorite = ()=>{
        let obj = weather.favorites.find((location)=>{
            return location.currentKey === weather.currentKey
        })
        console.log("in card",obj)
        if(obj){
            console.log("in card if",obj)
            dispatch(weatherActions.changeFavorite(true))
        }
        else{
            dispatch(weatherActions.changeFavorite(false))
            console.log("in card else",obj)
        }

    }
    useEffect(()=>{
        checkFavorite();
    },[weather.currentKey])
    console.log(weather)
    if(Object.keys(weather.weatherOfTheWeek).length === 0){
        return <div className="center-spin">
            <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
        </div>
    }
    else{
    return(
        <div className="card">
            <div className="first-line">
                <WeatherCard 
                header = {weather.currentWeather.WeatherText}
                city = {weather.city}
                date = {weather.currentWeather.LocalObservationDateTime}
                icon = {weather.currentWeather.WeatherIcon}
                temperature = {weather.currentWeather.Temperature.Metric.Value}
                />
             <FavoriteComponent
              header = {weather.currentWeather.WeatherText}
              city = {weather.city}
              currentKey = {weather.currentKey}
              date = {weather.currentWeather.LocalObservationDateTime}
              icon = {weather.currentWeather.WeatherIcon}
              temperature = {weather.currentWeather.Temperature.Metric.Value}
              favorite = {weather.isFavorite}
             />
             
             </div>
             <div className="centerText">
             <WeatherHeader header = {weather.weatherOfTheWeek.Headline.Text}/>
             </div>
             <div className="list">
               <ul className="list2">
                   {weather.weatherOfTheWeek.DailyForecasts.map((obj)=>{
                     
                       return(
                       <li className="list-item">
                           <WeatherCard
                           header = {obj.WeatherText}
                           city = ""
                           date = {obj.Date}
                           icon = {obj.Day.Icon}
                           temperature = {obj.Temperature.Maximum.Value}                          
                           />
                       </li>
                       )
                   })}
               </ul>
             </div>
        </div>
    )}
}
export default Card;