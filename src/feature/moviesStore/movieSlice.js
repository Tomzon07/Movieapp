import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi";
import { Apikey } from "../../common/api/movieApiKey";

const initialState={
    movies:{},  
    selectMovies:{}
}

export const fetchAsyncMovieDetail=createAsyncThunk(
    "movies/fetchAsyncMovieDetail",
    async (id)=>{
        const response =await movieApi.get(
            `?apiKey=${Apikey}&i=${id}&Plot=full`
        );
        return response.data
    }
)



const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
            state.movies=payload;
        },
        removeSelectedMovie:(state)=>{
            state.selectMovies={}
        }
    },
    extraReducers:{
        [fetchAsyncMovieDetail.fulfilled]:(state,{payload})=>{
            return {...state,selectMovies:payload}
        }
    }
})


export const {addMovies} =movieSlice.actions

export const {removeSelectedMovie} =movieSlice.actions


export const getAllmovies=(state)=>state.movies.movies

export const getSelctedMovie=(state)=>state.movies.selectMovies


export default movieSlice.reducer