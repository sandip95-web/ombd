import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {APIKey} from '../../Common/api/MovieApiKeys'
import axios from 'axios'

export const fetchMovie = createAsyncThunk(
    "movie/fetchMovie", 
    async(term)=>{
      const response = await axios.get(
        `https://www.omdbapi.com?apiKey=${APIKey}&s=${term}&type=movie`
      );
      return response.data
      }
)
export const fetchSeries=createAsyncThunk('movie/fetchSeries',
async (term)=>{
    const response=await axios.get(`https://www.omdbapi.com?apiKey=${APIKey}&s=${term}&type=series`)
    return response.data
})

export const fetchDetail=createAsyncThunk('movie/fetchDetail',
   async(id)=>{
    const response=await axios.get(`https://www.omdbapi.com?apiKey=${APIKey}&i=${id}&Plot=full`)
      console.log(response.data);
    return response.data
}
)
const initialState={
    movie:{},
    series:{},
    detail:{}
}
const movieSlice=createSlice({
    name:'movie',
    initialState,
    reducers:{
        removeaddMovies:(state)=>{
            state.detail={}
        }
    },
    extraReducers:{
        [fetchMovie.pending]:()=>{
            console.log("Pending");
        },
        [fetchMovie.fulfilled]:(state,{payload})=>{
            console.log("Succesfully Fetched");
            return{...state,movie:payload}
        },
        [fetchMovie.rejected]:()=>{
            console.log("Failed To Fetch");
        },
        [fetchSeries.pending]:()=>{
            console.log('pending');
        },
        [fetchSeries.fulfilled]:(state,{payload})=>{
            console.log('Fullfilled');
            return{...state,series:payload}
            
        },
        [fetchSeries.rejected]:()=>{
            console.log('Rejected');
        },
        [fetchDetail.fulfilled]:(state,{payload})=>{
            
            return {...state,detail:payload}
        }
    }
})

export const {removeaddMovies}=movieSlice.actions;
export default movieSlice.reducer