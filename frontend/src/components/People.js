import React, { Component } from "react";
import { Segment, Card, Button } from "semantic-ui-react";
import axios from "axios";

export default class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  deletePerson = (id) => {
    console.log(id);
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
                <Button
                    color="blue"
                    onClick={() => {
                      console.log(`Update ${person._id}`);
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    color="red"
                    onClick={() => {
                      axios
                        // .delete("http://localhost/api/v1" + "/person/" + person._id)
                        .delete("/api/v1/person/" + person._id)
                        .then((res) => {
                          // console.log(res);
                          this.fetchPeople();
                        })
                        .catch((err) => console.log(err));
                    }}
                  >
                    Update
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
