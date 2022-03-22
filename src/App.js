
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
  
  //updateWeather()
  return (
      <div>  
    <NavigationBar/>
    {/* <GetLocation
    checkLocation = {checkLocation}
    /> */}
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
