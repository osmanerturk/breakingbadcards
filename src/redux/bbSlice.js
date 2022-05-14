import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncCharacters = createAsyncThunk(
  "bb/getAsyncCharacters",
  async (id) => {
    const res = await axios("https://www.breakingbadapi.com/api/characters");
    return res.data;
  }
);
export const getAsyncCharacterDetail = createAsyncThunk(
  "bb/getAsyncCharacters",
  async (id) => {
    const res = await axios(`https://www.breakingbadapi.com/api/characters/${id}`);
    return res.data;
  }
);

export const getAsyncQuotes = createAsyncThunk(
  "bb/getAsyncQuotes",
  async (id) => {
    const res = await axios("https://www.breakingbadapi.com/api/quotes/");
    return res.data;
  }
);

export const bbSlice = createSlice({
  name: "bb",
  initialState: {
      items: []
  },
  reducers: {
  },
  extraReducers:{
      [getAsyncCharacters.fulfilled]:(state,action) =>{
        state.items = action.payload
      },
      [getAsyncQuotes.fulfilled]:(state,action) =>{
        state.items = action.payload
      },
      [getAsyncCharacterDetail.fulfilled]:(state,action) =>{
        state.items = action.payload
      },
  }
});


export default bbSlice.reducer;

export const {getAyr}= bbSlice.actions