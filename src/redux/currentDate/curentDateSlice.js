import { createSlice } from '@reduxjs/toolkit';


const dateSlice = createSlice({
  name: "date",
  initialState: new Date().toString(),
  reducers:{
    setDate:{
      reducer(_, {payload}){
        return payload;
      }
    }
  }
})

export const {setDate} = dateSlice.actions
export const dateReducer = dateSlice.reducer