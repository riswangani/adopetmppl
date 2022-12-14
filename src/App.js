import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Pets from "./components/Pets";
import About from "./components/About";
import Login from "./components/Login";
import NoMatch from "./components/NoMatch";
import Signup from "./components/SignUp";
import ListUsers from "./components/ListUser";
import PetDetail from "./components/PetDetail";
import Donate from "./components/Donate";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pets" component={Pets} />
        <Route exact path="/pet/:id" component={PetDetail} />
        <Route exact path="/about" component={About} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/users" component={ListUsers} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
