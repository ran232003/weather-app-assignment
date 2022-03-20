import React from "react";
import { Button } from "react-bootstrap";
import {AiFillHeart} from "react-icons/ai"; 
import { useDispatch } from "react-redux";
import "./FavoriteComponent.css"
const FavoriteComponent = ()=>{
    const dispatch = useDispatch();

    const addToFavorite = (event)=>{
        console.log("here")
        
    }
    return(
        <div>
            <div className="favDiv">
            <AiFillHeart size= "2rem" className="icon" onClick={addToFavorite}/>
            <Button className="btn">Favorite</Button>
        
        </div>
        </div>
    )
}
export default FavoriteComponent;