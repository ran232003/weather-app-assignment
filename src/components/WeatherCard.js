import React, { useState } from "react";
import "./WeatherCard.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { days } from "../days";
const WeatherCard = (props)=>{
  let  {header,temperature,city,date,icon} = props;
  const [image, setImage] = useState(null)
    date = new Date(date);
    const day = days[date.getDay()];
    let fileName = icon + ".svg";
    console.log(fileName);
    const fetchImage = async () => {
        try {
            const response = await import(`../myIcons/${fileName}`) // change relative path to suit your needs
            setImage(response.default)
            
        } catch (err) {
           
        } finally {
            
        }
    }
    fetchImage();
   
    return (
    <div className="WeatherCard">
       <Card sx={{ maxWidth: 145 }}>
      <CardActionArea>
        <CardMedia className="WeatherCard"
          component="img"
          height="115"
          image={image}
          alt="image"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {city}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {day}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {temperature}<span>&#176;</span> C
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {header}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </div>
    )
}
export default WeatherCard;