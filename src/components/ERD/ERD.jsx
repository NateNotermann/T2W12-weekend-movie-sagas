
// import ERD from '/Database_Images/ERD.jpg';
import './erd.css';
import {useHistory } from 'react-router-dom';

function ERD () {

    const history = useHistory();

    function backTolist () {
        console.log('Back to Movie List');
        history.push('/')
    }
    return(
        <>
        <header>ENTITY RELATIONSHIP DIAGRAM</header>
        <div>
            <p>
                Below is an image showing the overall relationship between the tree tables in this apps database
            </p>

        <img id="erd" src="/Database_Images/ERD.jpg" alt="ENTITY RELATIONSHIP DIAGRAM IMAGE"></img>
        </div>
        <button onClick={backTolist}> back to list</button>
        </>
    )
}

export default ERD;