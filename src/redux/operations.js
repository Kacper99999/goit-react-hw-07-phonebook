import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66e86e36b17821a9d9dcb0b9.mockapi.io/api/v1"

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_,thunkAPI) => {
        try{
            const response = await axios.get("/contacts");
            return response.data;
        }catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)



