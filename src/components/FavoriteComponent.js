import React from "react";
import { Button } from "react-bootstrap";
import {AiFillHeart} from "react-icons/ai"; 
import { useDispatch, useSelector } from "react-redux";
import { weatherActions } from "../store/weatherSlice";
import "./FavoriteComponent.css"
const FavoriteComponent = (props)=>{
    let  {header,temperature,city,date,icon} = props;
    const dispatch = useDispatch();
    const favoriteArray = useSelector((state)=>{
        return state.weather.favorites;
    })

    const checkFavorite = ()=>{

    }
    const addToFavorite = (event)=>{
        console.log("here")
        let id = localStorage.getItem("id");
        console.log(id)
        if(!id){
            id = 0;
        }
        id = id + 1
        const obj = {header,temperature,city,date,icon,id}
        dispatch(weatherActions.addToFavorites(obj))

    }
    return(
        <div>
            <div className="favDiv">
            <AiFillHeart size= "2rem" className="icon" onClick = {addToFavorite}/>
            <Button className="btn">Favorite</Button>
        
        </div>
        </div>
    )
}
export default FavoriteComponent;