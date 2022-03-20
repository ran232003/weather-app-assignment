
import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name:"weather",
    initialState:{currentWeather:{},weatherOfTheWeek:{},favorites:[],currentKey:0},
    reducers:{
        setCurrentWeather(state,action){
            state.currentWeather = action.payload;
        },
        setWeatherOfTheWeek(state,action){
            state.weatherOfTheWeek = action.payload;
        },
        addToFavorites(state,paload){
            state.favorites.push(paload);
        }
        
    }
    
})
export default weatherSlice;
export const weatherActions = weatherSlice.actions;