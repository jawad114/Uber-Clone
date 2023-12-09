import { createSlice } from "@reduxjs/toolkit"


const initialState={
    origin:null,
    destination:null,
    travelTimeInformation:null
}

export const navSlice=createSlice({
    name:'nav',
    initialState,
    reducer:{
        setOrigin:(state,action)=>{
            state.origin=action.payload;
        },
        setDestination:(state,action)=>{
            state.destination=action.payload;
        },
        setTravelTimeInformation:(state,action)=>{
            state.travelTimeInformation=action.payload;
        }
    }
})

export const {setOrigin,setDestination,setTravelTimeInformation}=navSlice.actions;

export const selectOrigin=(state)=>state.nav.setOrigin;
export const selectDestinition=(state)=>state.nav.setDestination;
export const selectTravelTimeInformation=(state)=>state.nav.setTravelTimeInformation;

export default navSlice.reducer