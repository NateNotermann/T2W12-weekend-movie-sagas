import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route path="/details" exact>
          <Details />
        </Route>
        {/* Details page */}

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


// movie poster onclick to /details view for that movie
// Details should show ALL GENRES for that movie
  // title, description, image. Use Saga and redux for this 

  // Hint : You can make a GET request for a specific movie. Remember req.params and :id?

