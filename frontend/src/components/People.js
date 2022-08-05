import React, { Component } from "react";
import { Segment, Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class GetPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // people: [{_id: "12345", name: "Test", age: 0, background: "test", description: "test"}],
      people: [],
    };
  }

  componentDidMount() {
    this.fetchPeople();
  }

  async fetchPeople() {
    // const people = await axios.get("http://localhost/api/v1" + "/person");
    const people = await axios.get("/api/v1/person").catch((err) => console.log(err));
    // console.log(people);
    this.setState({ people: people.data.data });
  }

  updatePerson = (id) => {
    console.log(`Update ${id}`);
  }
  deletePerson = (id) => {
    console.log(id);
    axios
      .delete("/api/v1/person/" + id)
      .then((res) => {
        this.fetchPeople();
      })
      .catch((err) => console.log(err));
  };

  PeopleCards = () => {
    if (this.state.people.length > 0){
      return (
        <Card.Group>
          {
          this.state.people.map((person) => {
            return (
              <Card key={person._id}>
                <Card.Content>
                  <Card.Header>{person.name}</Card.Header>
                  <Card.Meta>Age: {person.age}</Card.Meta>
                  <Card.Meta>Background: {person.background}</Card.Meta>
                  <Card.Description>{person.description}</Card.Description>
                </Card.Content>
                <Card.Content extra style={{ textAlign: "center" }}>
                  <Link to={`/home/update/${person._id}`}>
                    <Button
                      color="teal"
                    >
                      Update
                    </Button>
                  </Link>
                
                  <Button
                    color="red"
                    onClick={() => {
                      this.deletePerson(person._id)
                    }}
                  >
                    Delete
                  </Button>
                </Card.Content>
              </Card>
            );
          })
        }
        </Card.Group>
      );
    } else {
      return(
          <Card>
            <Card.Content> There is no data to be fetched </Card.Content>
        </Card>
      );
    }
  };

  render() {
    return (
      <Segment>
        <div>{this.PeopleCards()}</div>
      </Segment>
    );
  }
}