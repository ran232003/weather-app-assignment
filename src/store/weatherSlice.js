
import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name:"weather",
    initialState:{currentWeather:{}},
    reducers:{
        setCurrentWeather(state,action){
            state.currentWeather = action.payload;
        }
    }
})
export default weatherSlice;
export const weatherActions = weatherSlice.actions;