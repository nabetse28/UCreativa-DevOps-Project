import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Login from "./views/Login"
import Home from './views/Home';


class App extends React.Component {
  
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/home">
            <Redirect to="/home/" />
          </Route>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/home/*" component={Home}/>
            <Route exact path="*" component={() => "404 Not Found"} />
         </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
