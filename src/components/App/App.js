import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details'
import ERD from '../ERD/ERD';
import { useDispatch, useSelector } from 'react-redux';


function App() {

  const testCurrentMovie = useSelector(store => store.currentMovie);

  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      {/* <h3>CurrentMovie: {testCurrentMovie}</h3> */}
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route path="/details/:title/:id" exact > {/* - Dynamic route path - */}
          {/* -- added /:title - to have further understanding of what is happening -- */}
          {/* /:id is a /:taco colon tells it it will change i think */}
          <Details /> {/* Details page --- DONE ---- */}
        </Route>
        
        <Route path="/ERD" exact>
          <ERD />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;

// READ ME
// Nice CSS
  // cards and grids css

  // notes
  // ------ DETAILS PAGE ------ //


// movie poster onclick to /details view for that movie
// Details should show ALL GENRES for that movie
  // title, description, image. Use Saga and redux for this 

  // Hint : You can make a GET request for a specific movie. Remember req.params and :id?
// ------ BACK button - to movie list ------ DONE---------//


// -- Stretch: -- 