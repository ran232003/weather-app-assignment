
import './App.css';
import NavigationBar from './components/NavigationBar';
import {  Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Favorites from './pages/Favorites';
import {myObj} from "./dummyCurrentWeather";
import {weatherList} from "./weatherList"
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { weatherActions } from './store/weatherSlice';
import GetLocation from "./components/GetLocation"

//6jAYLwBpvKKB9w73VnO2DEAN2sPyGGpL
function App() {
  const dispatch = useDispatch();
  const apiKey = "6jAYLwBpvKKB9w73VnO2DEAN2sPyGGpL"
  const [location,setLocation] = useState({
    longitude:34.781769,
    latitude:32.085300
  });
 
 
let code;
  const updateWeather = ()=>{
    const obj = myObj[0];
    dispatch(weatherActions.setCurrentWeather(obj));
    dispatch(weatherActions.setWeatherOfTheWeek(weatherList))
  }
 const checkLocation = async(obj)=>{
   console.log(obj)
   if(!obj){
     obj = {
      longitude:34.781769,
      latitude:32.085300
    }
  }
    console.log("before")
    const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${obj.latitude}%2C${obj.longitude}&language=en-us&details=false&toplevel=true`,{})
    const data =  await response.json();
    console.log("sss",data);
    let name = data.EnglishName;
     code = data.Key;
    const res2 = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${code}?apikey=${apiKey}&language=en-us&details=true`)
    const data2 =  await res2.json();
    console.log("sss",data2[0]);
     dispatch(weatherActions.setCurrentWeather(data2[0]));
     dispatch(weatherActions.setWeatherOfTheWeek(weatherList))
  }
   
 
console.log("weather");

 
  //updateWeather()
  return (
      <div>  
    <NavigationBar/>
    <GetLocation
    checkLocation = {checkLocation}
    />
    <Routes>
      <Route path = "/" element = {<HomePage/>}>

      </Route>
      <Route path = "/favorite" element = {<Favorites/>}>

      </Route>
    </Routes>
    
     </div>
    
  
  );
}

export default App;
