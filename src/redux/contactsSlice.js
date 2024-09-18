import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts , addContact } from "./operations";

const handlePending = (state) => {
    state.isLoading = true;
}

const hendleRejeced = (state , action) => {
    state.isLoading = false;
    state.error = action.payload;
}


const contactsSlice = createSlice({
    name:"phonebook",
    initialState : {
        contacts:[],
        isLoading:false,
        error:null
    },
    extraReducers: builder => {
        builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.contacts = action.payload;
            state.isLoading = false;
            state.error = null;
        })
        .addCase(fetchContacts.rejected, hendleRejeced)
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, (state, action) => {
                state.contacts = [...state.contacts,action.payload];
                state.isLoading = false;
                state.error = null;            
        })
        .addCase(addContact.rejected, hendleRejeced)
    }
    
})


export const contactsReducer = contactsSlice.reducer;




