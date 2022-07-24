import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details'
import ERD from '../ERD/ERD';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route path="/details" exact>
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