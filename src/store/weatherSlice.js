
import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name:"weather",
    initialState:{currentWeather:{},weatherOfTheWeek:{},favorites:[]},
    reducers:{
        setCurrentWeather(state,action){
            state.currentWeather = action.payload;
        },
        setWeatherOfTheWeek(state,action){
            state.weatherOfTheWeek = action.payload;
        },
        addFavorite(state,paload){
            
        }
        
    }
    
})
export default weatherSlice;
export const weatherActions = weatherSlice.actions;