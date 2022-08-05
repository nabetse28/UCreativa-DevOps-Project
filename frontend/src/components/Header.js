import React from "react";
import { Header, Icon } from "semantic-ui-react";

function HeaderPeople() {
  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <Icon name="users" circular color='teal'/>
        <Header.Content>People</Header.Content>
      </Header>
    </div>
  );
}

export default HeaderPeople;
