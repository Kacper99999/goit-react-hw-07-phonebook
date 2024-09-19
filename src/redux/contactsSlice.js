import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts , addContact , delateContact} from "./operations";

const handlePending = (state) => {
    state.isLoading = true;
}

const handleRejeced = (state , action) => {
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
        .addCase(fetchContacts.rejected, handleRejeced)
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, (state, action) => {
                state.contacts = [...state.contacts,action.payload];
                state.isLoading = false;
                state.error = null;            
        })
        .addCase(addContact.rejected, handleRejeced)
        .addCase(delateContact.pending, handlePending)
        .addCase(delateContact.fulfilled, (state, action) => {
            const index = state.contacts.findIndex(con => 
                con.id === action.payload.id
            );
            state.contacts.splice(index, 1)
        })
        .addCase(delateContact.rejected, handleRejeced)
    }
    
})


export const contactsReducer = contactsSlice.reducer;




