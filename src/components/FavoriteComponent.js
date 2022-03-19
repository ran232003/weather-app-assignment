import React from "react";
import { Button } from "react-bootstrap";
import {AiFillHeart} from "react-icons/ai"; 
import "./FavoriteComponent.css"
const FavoriteComponent = ()=>{

    return(
        <div>
            <div className="favDiv">
            <AiFillHeart size= "2rem" className="icon"/>
            <Button className="btn">Favorite</Button>
        
        </div>
        </div>
    )
}
export default FavoriteComponent;