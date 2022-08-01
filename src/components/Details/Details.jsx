import '../Details/Details';
import {useHistory } from 'react-router-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ERD from '../ERD/ERD';
import { useState, useEffect } from 'react';


function Details (  ) {

    const history = useHistory();
    const currentMovie = useSelector(store => store.currentMovie)
    const genres = useSelector(store => store.genres)
    const dispatch = useDispatch();
    
    
// ------ Buttons ------ //
    function backTolist () {
        history.push('/')
    }

    function toErd (){
        history.push('/erd')
    }

    function currentMovieFunction (){ // checks currentMovie
            console.log('currentMovie', currentMovie.movie);
            console.log('test genres store', genres.id );
            // console.log works, so state is updating..
    }



    useEffect(() => {
         dispatch({ type: 'GET_GENRES_DB' }); 
    }, [] );


    return(
        <>
        <header>        
            <h2> Details Page</h2>            
        </header>
        
        <h3>{currentMovie.movie.title}</h3>
        <p> {currentMovie.movie.description}</p>
        <img src={currentMovie.movie.poster}></img>
        
        <h4>Genres</h4>
        {genres.map((genres, i ) =>  {
            return(
                <h4 key={i}>{genres.name}</h4>
            )
        })}

        <div>        
        <button onClick={backTolist}> back to list</button>
        <button onClick={toErd}> Go to ERD</button>
        <button onClick={currentMovieFunction}>currentMovie</button>
        </div>

        <Route path="/erd" exact>
          <ERD />
        </Route>
        </>
    )
}

export default Details;