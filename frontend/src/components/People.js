import React, { Component } from "react";
import { Segment, Card, Button } from "semantic-ui-react";
import { Link, withRouter  } from "react-router-dom";
import axios from "axios";

class People extends Component {
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
                  <Link to={`/update/${person._id}`}>
                    <Button
                      color="blue"
                      onClick={() => {
                        this.updatePerson(person._id);
                      }}
                    >
                      Update
                    </Button>
                  </Link>
                
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


export default withRouter(People);