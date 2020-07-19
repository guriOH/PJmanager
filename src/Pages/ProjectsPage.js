import React from "react";
import { connect } from "react-redux";
import categoryType from "../elements/category"
import * as service from "../services/project";

import { Header, Grid, Card, Input, Divider,Select } from "semantic-ui-react";
class ProjectsPage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      projects: [],
    };
  }
  componentDidMount() {
    this.fetchProjectInfo();
  }

  fetchProjectInfo = async () => {
    const response = await service.getProjectList();
    console.log(response);

    const projects = response.data.projects;

    this.setState({
      projects,
    });

    console.log(this.state);
  };

  render() {
    const { projects } = this.state;

    return (
      <div>
        <Header as="h3">프로젝트 모음</Header>
        <Select placeholder='Select your country' options={categoryType} />
        <Input fluid icon="search" placeholder="Search..." />
        <Divider />
        <Grid columns={8}>
          {projects.map((project, i) =>
              <Grid.Row stretched>
                <Grid.Column width={2} key={i}>
                  <Card
                    href="#card-example-link-card"
                    header={i}
                    meta={project.category}
                    description={project.description}
                  />
                </Grid.Column>
              </Grid.Row>
          )}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(ProjectsPage);
