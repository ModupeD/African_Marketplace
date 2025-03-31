import "./App.css";
import Form from "./components/form";
import Women from "./components/Women";
import {
  Routes,
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
        <Routes>
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Form />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
