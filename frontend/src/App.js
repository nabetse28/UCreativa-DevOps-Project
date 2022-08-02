import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import HeaderPeople from "./components/Header";
import MenuExamplePointing from "./components/Menu";
import People from "./components/People";
import AddPeople from "./components/AddPeople";
import UpdateDetails from './components/Update';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Router>
          <HeaderPeople />
          <MenuExamplePointing />
          <Route exact path="/">
            <Redirect to="/people" />
          </Route>
          <Switch>
            <Route path="/people" exact component={People} />
            <Route path="/addpeople" component={AddPeople} />
            <Route path="/update/:id" component={UpdateDetails} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
