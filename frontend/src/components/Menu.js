import React, { Component } from "react";
import { Button, Menu } from "semantic-ui-react";
import { BrowserRouter as Router, Link, withRouter, Route } from "react-router-dom";
import Login from "../views/Login"

class MenuPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "People"
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  onLogout(){
    console.log("Logout")
    this.props.history.push('/');
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing>
          <Menu.Item
            as={Link}
            to="/home/people"
            name="People"
            active={activeItem === "People"}
            onClick={this.handleItemClick}
            color="teal"
          />
          <Menu.Item
            as={Link}
            to="/home/addperson"
            name="Add Person"
            active={activeItem === "Add Person"}
            onClick={this.handleItemClick}
            color="teal"
          />
          <Menu.Menu position='right'>
          <Menu.Item>
            <Button
              color='red'
              onClick={() => {
                this.onLogout()
              }}
            >
              Logout
            </Button>
          </Menu.Item>
        </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default withRouter(MenuPeople)