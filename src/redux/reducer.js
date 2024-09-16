import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";

const handlePending = (state) => {
    state.isLoading = true;
}

const hendleRejeced = (state , action) => {
    state.isLoading = false;
    state.error = action.payload;
}


const phonebook = createSlice({
    name:"phonebook",
    initialState : {
        contacts:[],
        isLoading:false,
        error:null
    },
    extraRducers: builder => {
        builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.contacts = action.payload;
            state.isLoading = false;
            state.error = null;
        })
        .addCase(fetchContacts.rejected, hendleRejeced)
    }
    
})


export const phonebookReducer = phonebook.reducer;




