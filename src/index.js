import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';




// you could map over the array of genres or 
//-- or -- 
//SPREAD over them to get the last state plus the new action

// axios.get will connect to the server
    // axios,get needs to match a router.get
    // axios.post needs to match a router.post

//Movie Details, put $ at the end of the things you want to check.
//like src={movieDetails?.poster} if this thing is a thing fo it, if not, more on.

//redux is for variables, 
    // saga is for functions(server calls)

    


// ------------------ rootSaga generator function --- listening for:------------  //
function* rootSaga() {
    // ---- If rootSaga hears 'FETCH_MOVIES' (at any time or anywhere)
        // then run fetchAllMovies ----//
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);

    // gonna test'GET_GENRES' in a button click, in movie details 
    yield takeEvery('GET_GENRES_DB', getGenres );
}



// ---------- GENERATOR SAGAS ---------- //

// ---------- fetchAllMovies for MovieList ---------- //
function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        // console.log('fetchAllMovies const MOVIES.data:(index.js)', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('SET_MOVIES error');
    }
} 


// ---------- getGenres for MovieList and then movieDetails---------- //
function* getGenres(action) {   
    // get all genres from the DB
    // movies.data goes to movie bd
    try {
        const genres = yield axios.get(`/api/genre/${action.payload}`); // --THIS IS CORRECT DON`T CHANGE THIS LINE -- //
        // INCORRECT CODE WAS: -->> ${action.payload.movie.id}`);"  -- should JUST be "${action.payload}" --- //
 
        // -- it's genres.data b/c we named the CONST 'genres' above -- //
        // console.log('getGenres GENRES.data: (INDEX.JS)', genres.data);  // <<-- too much in browser terminal, turning off //

            // below line in UNDEFINED. Don`t really need, turning off -- //
        // console.log('getGenres action.payload: is UNDEFINED (INDEX.JS)', action.payload);
        
        yield put({ type: 'SET_GENRES_STATE', payload: genres.data });

    } catch(error) {
        console.log('getGenres SAGAfunction error', error);
    }
        
} 




// ---------- Create sagaMiddleware---------- //
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
// ---- state is an array so we can .map() through it in the component  ---- //
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// ------ store CURRENT MOVIE info in REDUCER------ //
// ---- store is an OBJECT b/a we only need one, and we need to be able to get 
    // it's KEY values. like movie.title, movie.description, 
const currentMovie = (state = {}, action) => {
    switch (action.type) {
        case 'GET_MOVIE':
            // action.payload is entire movie
            console.log('action.payload:',action.payload, '(index.jsx)');
             // action.payload.movie.id  -- is just find the id within the currentMovie object
            console.log('action.payload:',action.payload.movie.id, '(index.jsx)');
            return action.payload;
        default:
            return state;
    }
}


// Used to store the movie genres
// --- will be storing multiple genres --- //
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES_STATE':
            return (
                console.log('GENRES STORE action.payload`s is/:', action.payload ),

                action.payload // -- CURRENTLY 'action.payload' returns ALL genres -- // 
               
            );  
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        currentMovie,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware ), //logger
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
