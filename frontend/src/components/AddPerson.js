import React, { Component } from "react";
import { Form, TextArea, Segment } from "semantic-ui-react";
import axios from "axios";

export default class AddPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      background: "",
      description: "",
    };

    this.onPersonName = this.onPersonName.bind(this);
    this.onBackground = this.onBackground.bind(this);
    this.onAge = this.onAge.bind(this);
    this.onDescription = this.onDescription.bind(this);
  }
  onPersonName(event) {
    this.setState({ name: event.target.value });
  }
  onBackground(event) {
    this.setState({ background: event.target.value });
  }
  onAge(event) {
    this.setState({ age: event.target.value });
  }
  onDescription(event) {
    this.setState({ description: event.target.value });
  }

  render() {
    return (
      <Segment>
        <Form>
          <Form.Group>
            <Form.Input
              label="Complete Name"
              placeholder="Complete Name"
              width={6}
              onChange={this.onPersonName}
              value={this.state.name}
            />
            <Form.Input
              label="Background"
              placeholder="Describe your background here..."
              width={6}
              onChange={this.onBackground}
              value={this.state.background}
            />
            <Form.Input
              label="Age"
              placeholder="Age"
              width={4}
              type="number"
              onChange={this.onAge}
              value={this.state.age}
            />
          </Form.Group>

          <Form.Field
            control={TextArea}
            label="Description"
            placeholder="Tell us more about your background..."
            onChange={this.onDescription}
            value={this.state.description}
          />
          <Form.Group inline>
            <Form.Button
              color='teal'
              onClick={() => {
                axios
                  // .post("http://localhost/api/v1/person", {
                    .post("/api/v1/person", {
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
