import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Favorites from './pages/Favorites';
import {myObj} from "./dummyCurrentWeather";
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import { useEffect } from 'react';
import { weatherActions } from './store/weatherSlice';

//6jAYLwBpvKKB9w73VnO2DEAN2sPyGGpL
function App() {
  const dispatch = useDispatch();
  console.log("ssss",myObj)
  useEffect(()=>{
    const obj = myObj[0];
    console.log(obj)
    dispatch(weatherActions.setCurrentWeather(obj))
    console.log("s",obj.WeatherIcon)
  },[])
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
