import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name : "filters",
    initialState : {
        filter:"",
    },
    reducers : {
        filterContacts(state, action){
            state.filter = action.payload;
        }
    }
})

export const {filterContacts} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;



