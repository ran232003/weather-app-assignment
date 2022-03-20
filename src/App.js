import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Favorites from './pages/Favorites';
import {myObj} from "./dummyCurrentWeather";
import {weatherList} from "./weatherList"
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import { useEffect } from 'react';
import { weatherActions } from './store/weatherSlice';

//6jAYLwBpvKKB9w73VnO2DEAN2sPyGGpL
function App() {
  const dispatch = useDispatch();
  const weather = useSelector((state)=>{
    return state.weather;
  })
  
  const updateWeather = ()=>{
    const obj = myObj[0];
    dispatch(weatherActions.setCurrentWeather(obj));
    dispatch(weatherActions.setWeatherOfTheWeek(weatherList))
  }
  useEffect(()=>{
   console.log("effect")
    //updateWeather()
  },[weather])
  updateWeather()
  return (
      <div>  
    <NavigationBar/>
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
