import React from "react";
import { connect } from "react-redux";
import { createProject } from "../Actions";
import categoryType from "../elements/category"
import * as service from "../services/project";
import {
  Divider,
  Form,
  Button,
  Select,
  TextArea,
  Segment,
  Header,
  Icon,
} from "semantic-ui-react";

class CreateProjectPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projectName: "",
      category: "",
      description: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  createProjectInfo = async (project) => {
    const response = await service.createProject(project);
    console.log(response);
  };

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  handleSearchChange(event, value, field) {
    this.setState({ [field]: value });
  }

  handleSubmit(event) {
    console.log(this.state);
    this.createProjectInfo(this.state);
    this.props.newProject(this.state);
    event.preventDefault();
  }

  render() {
    const { name, description } = this.state;

    return (
      <div>
        <Header as="h3">프로젝트 시작</Header>
        <Divider />
        <Form onSubmit={this.handleSubmit}>
          <Form.Field
            placeholder="ProjectName"
            name="projectname"
            value={name}
            onChange={(event) => this.handleChange(event, "projectName")}
          >
            <label>프로젝트명</label>
            <input placeholder="Project Name" />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field
              control={Select}
              options={categoryType}
              label={{
                children: "분야",
                htmlFor: "form-select-control-gender",
              }}
              placeholder="Type"
              search
              searchInput={{ id: "form-select-control-gender" }}
              onChange={(event, { value }) =>
                this.handleSearchChange(event, value, "category")
              }
            />
          </Form.Group>
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Opinion"
            placeholder="Opinion"
            name={description}
            onChange={(event) => this.handleChange(event, "description")}
          />
          <Segment placeholder>
            <Header icon>
              <Icon name="pdf file outline" />
              No documents are listed for this customer.
            </Header>
            <Button primary>Add Document</Button>
          </Segment>

          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="등록"
            label=""
          />
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newProject: (project) => {
      dispatch(createProject(project));
    },
  };
};

export default connect(null, mapDispatchToProps)(CreateProjectPage);
