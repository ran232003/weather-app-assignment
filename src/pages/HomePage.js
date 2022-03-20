import React, { useEffect, useRef, useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import "./HomePage.css"
import logo from '../1.svg';
import FavoriteComponent from "../components/FavoriteComponent";
import Card from "../components/Card";
const HomePage = ()=>{
    const [image, setImage] = useState(null)
    const inputRef = useRef(null);
    const logo2 = require('../1.svg'); // with require
    const top100Films = [
        { label: 'The Shawshank Redemptisson', year: 1994 },
        { label: 'The Godfather', year: 1972 }]
       
    console.log("test",image) 
    const changeInput = (event)=>{
        console.log(event.target.value)
        
       
    }  
    const getInput = (event,value)=>{
        console.log(value)      
    }      
    return (
        <div>
            <div className="searchBar">
            <Autocomplete
            className = "auto"
            onChange={getInput}
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField ref = {inputRef} {...params} label="Location" onChange={changeInput} />}
    />
    </div>
    <Card/>
    {/* <img src={image}  width="100" height="50"  alt="logo" /> */}
       
    

        </div>
    )
}

export default HomePage;