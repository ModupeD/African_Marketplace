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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Form Form={Form} />
          </Route>
          <Route path="/home">
            <Home Home={Home} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
