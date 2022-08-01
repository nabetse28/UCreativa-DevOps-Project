import React, { Component } from "react";
import { Form, TextArea, Segment } from "semantic-ui-react";
import axios from "axios";

export default class UpdateDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      background: "",
      description: "",
    };

    this.PersonName = this.PersonName.bind(this);
    this.Background = this.Background.bind(this);
    this.Age = this.Age.bind(this);
    this.Description = this.Description.bind(this);
  }
  PersonName(event) {
    this.setState({ name: event.target.value });
  }
  Background(event) {
    this.setState({ background: event.target.value });
  }
  Age(event) {
    this.setState({ age: event.target.value });
  }
  Description(event) {
    this.setState({ description: event.target.value });
  }

  render() {
    return (
      <Segment>
        <Form>
          <Form.Group>
            <Form.Input
              label="Update Name"
              placeholder="Update Name"
              width={6}
              onChange={this.PersonName}
              value={this.state.name}
            />
            <Form.Input
              label="Update Background"
              placeholder="Update your background here..."
              width={6}
              onChange={this.Background}
              value={this.state.background}
            />
            <Form.Input
              label="Update Age"
              placeholder="Update Age"
              width={4}
              type="number"
              onChange={this.Age}
              value={this.state.age}
            />
          </Form.Group>

          <Form.Field
            control={TextArea}
            label="Description"
            placeholder="Tell us more about your background..."
            onChange={this.Description}
            value={this.state.description}
          />
          <Form.Group inline>
            <Form.Button
              primary
              onClick={() => {
                axios
                  // .post("http://localhost/api/v1/person", {
                    .post("/api/v1" + "/person", {
                    name: this.state.name,
                    age: this.state.age,
                    description: this.state.description,
                    background: this.state.background,
                  })
                  .then((res) => {
                    // console.log(res);
                    this.setState({
                      name: "",
                      age: 0,
                      background: "",
                      description: "",
                    });
                  })
                  .catch((err) => console.log(err));
              }}
            >
              Submit
            </Form.Button>
            <Form.Button
              onClick={() => {
                this.setState({
                  name: "",
                  age: 0,
                  background: "",
                  description: "",
                });
              }}
            >
              Reset
            </Form.Button>
          </Form.Group>
        </Form>
      </Segment>
    );
  }
}
