import AppEntry from "./components/appEntry/AppEntry";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./pages/about/About";
import Researches from "./pages/researches/Researches";
import {useState} from "react";
import Login from "./pages/login/Login";
import SignUp from "./pages/register/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
function App() {
  const [show, setShow] = useState(false);
  return (
    <Router>
      <Header show={show} setShow={setShow} />
      <div onClick={() => setShow(false)}>
        <Switch>
          <Route exact path="/" component={AppEntry} />
          <Route path="/about" component={About} />
          <Route path="/researches" component={Researches} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
