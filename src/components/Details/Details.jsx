import '../Details/Details';
import {useHistory } from 'react-router-dom';

function Details () {

    const history = useHistory();
    function backTolist () {
        console.log('Back to Movie List');
        history.push('/')
    
    }

    return(
        <>
        <header>        
            <h2> Details Page</h2>
        </header>

        <h3>Title here</h3>
        <h4> Genres Here</h4>
        <p>
            Movie info here
        </p>
        <button onClick={backTolist}> back to list</button>
        </>
    )
}

export default Details;