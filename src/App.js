import "./App.css";
import Form from "./components/form";
import Women from "./components/Women";
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Men from "./components/men";
import Dashboard from "./components/dashboard";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/women">
            <Women />
          </Route>
          <Route path="/men">
            <Men />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/">
            <Form />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
