import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import HeaderPeople from "./components/Header";
import MenuExamplePointing from "./components/Menu";
import People from "./components/People";
import AddPeople from "./components/AddPeople";
import Update from "./components/Update"; 

class App extends React.Component {
  
  render() {
    return (
      <div>
        <HeaderPeople />
        <Router>
          <MenuExamplePointing />
          <Route exact path="/">
            <Redirect to="/People" />
          </Route>
          <Route path="/People" exact render={() => <People />} />
          <Route path="/AddPeople" exact render={() => <AddPeople />} />
          <Route path="/Update" exact render={() => <Update />} />
        </Router>
      </div>
    );
  }
}

export default App;
