import React, { Component } from "react";
import { Form, TextArea, Segment } from "semantic-ui-react";
import axios from "axios";

export default class UpdateDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: "",
      // age: 0,
      // background: "",
      // description: "",
      id: this.props.match.params.id,
      person: {},
    };
    // console.log(this.props.match.params.id);
    this.PersonName = this.PersonName.bind(this);
    this.Background = this.Background.bind(this);
    this.Age = this.Age.bind(this);
    this.Description = this.Description.bind(this);
  }

  componentDidMount() {
    this.fetchPerson();
  }

  async fetchPerson() {
    // const people = await axios.get("http://localhost/api/v1" + "/person");
    const person = await axios.get("/api/v1/person/" + this.state.id).catch((err) => console.log(err));
    console.log(person);
    this.setState({ person: person.data.data });
  }

  PersonName(event) {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        name: event.target.value
      }
    }));
    // this.setState({ name: event.target.value });
  }
  Background(event) {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        background: event.target.value
      }
    }));
  }
  Age(event) {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        age: event.target.value
      }
    }));
  }
  Description(event) {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        description: event.target.value
      }
    }));
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
              value={this.state.person.name}
            />
            <Form.Input
              label="Update Background"
              placeholder="Update your background here..."
              width={6}
              onChange={this.Background}
              value={this.state.person.background}
            />
            <Form.Input
              label="Update Age"
              placeholder="Update Age"
              width={4}
              type="number"
              onChange={this.Age}
              value={this.state.person.age}
            />
          </Form.Group>

          <Form.Field
            control={TextArea}
            label="Description"
            placeholder="Tell us more about your background..."
            onChange={this.Description}
            value={this.state.person.description}
          />
          <Form.Group inline>
            <Form.Button
              primary
              onClick={() => {
                console.log(this.state.person);
                // axios
                //     .patch("/api/v1/person", {
                //     name: this.state.name,
                //     age: this.state.age,
                //     description: this.state.description,
                //     background: this.state.background,
                //   })
                //   .then((res) => {
                //     // console.log(res);
                //     this.setState({
                //       name: "",
                //       age: 0,
                //       background: "",
                //       description: "",
                //     });
                //   })
                //   .catch((err) => console.log(err));
              }}
            >
              Update
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
