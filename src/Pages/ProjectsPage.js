import React from "react";
import { connect } from 'react-redux'

import { Container, Header, Grid, Card, Input, Divider } from "semantic-ui-react";
const ProjectsPage = () => (
  <div>
    <Header as="h3">프로젝트 모음</Header>
      <Input fluid icon='search' placeholder='Search...' />
      <Divider/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <Card
              href="#card-example-link-card"
              header="Elliot Baker"
              meta="Friend"
              description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
            />
          </Grid.Column>
          <Grid.Column width={2}>
            <Card
              href="#card-example-link-card"
              header="Elliot Baker"
              meta="Friend"
              description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
  </div>
);


const mapStateToProps = (state) =>{
  console.log(state);

  return {
    projects: state.projects
  };
}


export default connect(mapStateToProps)(ProjectsPage);
