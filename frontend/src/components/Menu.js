import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default class MenuExamplePointing extends Component {
  state = { activeItem: "People" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing>
          <Menu.Item
            as={Link}
            to="/People"
            name="People"
            active={activeItem === "People"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/AddPeople"
            name="Add People"
            active={activeItem === "Add People"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}