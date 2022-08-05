import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import HeaderPeople from "../components/Header";
import MenuPeople from "../components/Menu";
import GetPeople from "../components/People";
import AddPerson from "../components/AddPerson";
import UpdatePerson from '../components/Update';
import Login from "../views/Login"

export default class Home extends Component {
    render() {
        return(
            <div>
                <HeaderPeople />
                <MenuPeople />
                <Route exact path="/home">
                    <Redirect to="/home/people" />
                </Route>
                <Switch>
                    <Route path="/home/people" exact component={GetPeople} />
                    <Route path="/home/addperson" exact component={AddPerson} />
                    <Route path="/home/update/:id" exact component={UpdatePerson} />
                    <Route path="/home/*" component={() => "404 Not Found"}/>
                </Switch>
            </div>
        );
    }
}