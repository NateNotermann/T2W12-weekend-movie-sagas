import '../Details/Details';
import {useHistory } from 'react-router-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ERD from '../ERD/ERD';
import { useState, useEffect } from 'react';


function Details () {

    const history = useHistory();
    const currentMovie = useSelector(store => store.currentMovie)

    

    function backTolist () {
        // console.log('Back to Movie List');
        history.push('/')
    }

    function toErd (){
        // console.log('going to ERD');
        history.push('/erd')
    }





    useEffect(() => {
     
    }, [] );



    return(
        <>
        <header>        
            <h2> Details Page</h2>            
        </header>

        <h3>Title here</h3>
        <h4> Genres Here</h4>
        <p>Movie info here</p>

        
        <button onClick={backTolist}> back to list</button>
        <button onClick={toErd}> Go to ERD</button>

        <Route path="/erd" exact>
          <ERD />
        </Route>
        </>
    )
}

export default Details;