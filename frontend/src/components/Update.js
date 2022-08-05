import React, { Component } from "react";
import { Form, TextArea, Segment } from "semantic-ui-react";
import axios from "axios";

export default class UpdatePerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      person: {},
      // person: {_id: "12345", name: "Test", age: 0, background: "test", description: "test"},
    };
    // console.log(this.props.match.params.id);
    this.onPersonName = this.onPersonName.bind(this);
    this.onBackground = this.onBackground.bind(this);
    this.onAge = this.onAge.bind(this);
    this.onDescription = this.onDescription.bind(this);
  }

  componentDidMount() {
    this.fetchPerson();
  }

  async fetchPerson() {
    const person = await axios.get("/api/v1/person/" + this.state.id).catch((err) => console.log(err));
    // console.log(person);
    this.setState({ person: person.data.data });
  }

  onPersonName(event) {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        name: event.target.value
      }
    }));
  }
  onBackground(event) {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        background: event.target.value
      }
    }));
  }
  onAge(event) {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        age: event.target.value
      }
    }));
  }
  onDescription(event) {
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
              onChange={this.onPersonName}
              value={this.state.person.name}
            />
            <Form.Input
              label="Update Background"
              placeholder="Update your background here..."
              width={6}
              onChange={this.onBackground}
              value={this.state.person.background}
            />
            <Form.Input
              label="Update Age"
              placeholder="Update Age"
              width={4}
              type="number"
              onChange={this.onAge}
              value={this.state.person.age}
            />
          </Form.Group>

          <Form.Field
            control={TextArea}
            label="Description"
            placeholder="Tell us more about your background..."
            onChange={this.onDescription}
            value={this.state.person.description}
          />
          <Form.Group inline>
            <Form.Button
              onClick={() => {
                this.props.history.push('/home/')
              }}
            >
              Back
            </Form.Button>
            <Form.Button
              color='teal'
              onClick={() => {
                console.log(this.state.person);
                axios
                    .patch("/api/v1/person/" + this.state.id, {
                    name: this.state.person.name,
                    age: this.state.person.age,
                    description: this.state.person.description,
                    background: this.state.person.background,
                  })
                  .then((res) => {
                    this.props.history.push("/home/people")
                  })
                  .catch((err) => console.log(err));
              }}
            >
              Update
            </Form.Button>
            
          </Form.Group>
        </Form>
      </Segment>
    );
  }
}
