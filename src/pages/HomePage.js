import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import "./HomePage.css"
import logo from '../1.svg';
import FavoriteComponent from "../components/FavoriteComponent";
import Card from "../components/Card";
const HomePage = ()=>{
    const [image, setImage] = useState(null)
    const logo2 = require('../1.svg'); // with require
    const top100Films = [
        { label: 'The Shawshank Redemptisson', year: 1994 },
        { label: 'The Godfather', year: 1972 }]
        useEffect(() => {
            let fileName = "1.svg";
            const fetchImage = async () => {
                try {
                    let fileName = "18.svg"
                    const response = await import(`../icons/${fileName}`) // change relative path to suit your needs
                    setImage(response.default)
                } catch (err) {
                   
                } finally {
                    
                }
            }
            fetchImage()
        }, [])
    console.log(image)        
    return (
        <div>
            <div className="searchBar">
            <Autocomplete
            className = "auto"
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Location" />}
    />
    </div>
    <Card/>
    <img src={image}  width="100" height="50"  alt="logo" />
       
    

        </div>
    )
}

export default HomePage;