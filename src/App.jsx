import { useScrollTrigger } from "@material-ui/core";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const getUser = (u) =>{
    setUser(u);
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Login setUser={getUser} />}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login setUser={getUser} />}
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
