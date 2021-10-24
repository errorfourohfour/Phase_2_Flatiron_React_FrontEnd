import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.css";
import Activities from "./Activities";
import Home from "./Home";
import Destinations from './Destinations';


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ActivityList">Activity List</Link>
          </li>
          <li>
            <Link to="/DestinationList">Destination List</Link>
          </li>
        </ul>
      </nav>
      <div className="App">
        <Switch>
          <Route path="/" exact>
          <h1> Bucket List </h1>
            <Home />
          </Route>
          <Route path="/ActivityList">
          <Activities/>
          </Route>
          <Route>
            <Route path="/DestinationList">
            <Destinations />
            </Route>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
