import React,{useEffect} from 'react';
import Movies from "../../components/Movies/movies"
import movieApi from "../../common/api/movieApi"
import {Apikey} from "../../common/api/movieApiKey"
import {useDispatch} from "react-redux"
import { addMovies } from '../../feature/moviesStore/movieSlice';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      const movieTexts = ["Harry Potter"]; 
      const fetchMovies = async () => {
        try {
          for (const movieText of movieTexts) {
            const res = await movieApi.get(`?apikey=${Apikey}&s=${movieText}&type=movie`);
            console.log("res", res);
            dispatch(addMovies(res.data)); 
          }
        } catch (err) {
          console.log(err);
        }
      };
    
      fetchMovies();
    }, []);
      

    return (
        <>
        <div className='banner-img' >
            <Movies />
            
        </div>
        </>
    );
};

export default Home;