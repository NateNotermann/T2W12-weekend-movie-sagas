import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';


function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
   const currentMovie = useSelector(store => store.currentMovie);

// ------ send CURRENT MOVIE info to REDUCER ------ //
    function clickPoster (movie) { // receives (movie) from the 'onClick={(event) => clickPoster (movie)} // 
        // console.log('CLICKED MOVIE:', movie);
        console.log('MOVIE.id:', movie.id);
        console.log('MOVIE.title:', movie.title);

        dispatch ({
            type: 'GET_MOVIE',
            payload: {movie}
        })
        // console.log('currentMovie:', currentMovie); -checks currentMovie Store
        // history.push(`/details`)
        history.push(`/details/${movie.title}/${movie.id}`)
      
    }

// ------ on PAGE LOAD to this ------ //
    useEffect(() => {
        // ------ 1. MovieList - call SAGA with 'FETCH_MOVIES' 
        dispatch({ type: 'FETCH_MOVIES' });
        // uses 'GET_GENRES_DB' to tell the saga to run the get all genres function
        dispatch({ type: 'GET_GENRES_DB' }); 
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <h4>{movie.id}</h4>
                            <img 
                            src={movie.poster} 
                            alt={movie.title}

                            onClick={(event) => clickPoster (movie)} // sends (movie) to 'clickPoster' function
                            />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;