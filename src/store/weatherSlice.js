
import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name:"weather",
    initialState:{currentWeather:{},weatherOfTheWeek:{},favorites:[],currentKey:0,city:"",isFavorite:false},
    reducers:{
        setCurrentWeather(state,action){
            state.currentWeather = action.payload;
        },
        setWeatherOfTheWeek(state,action){
            state.weatherOfTheWeek = action.payload;
        },
        addToFavorites(state,action){
            state.favorites.push(action.payload);
        },
        setCity(state,action){
            state.city =action.payload;
        },
        setKey(state,action){
            state.currentKey =action.payload;
        },
        changeFavorite(state,action){
            console.log("in slice",action.payload)
            state.isFavorite = action.payload;
        }
        
    }
    
})
export default weatherSlice;
export const weatherActions = weatherSlice.actions;