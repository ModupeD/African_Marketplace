import "./App.css";

import ReactDOM from "react-dom";
import Form from "./components/form";
import Home from "./components/Home";

import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Profile from "./components/profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home Home={Home} />
          </Route>
          <Route path="/profile">
            <Profile profile={Profile} />
          </Route>
          <Route path="/">
            <Form Form={Form} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
