import React from "react";

import {
  Container,
  Divider,
  Form,
  Button,
  Input,
  Select,
  TextArea,
  Segment,
  Header,
  Icon,
  Step,
} from "semantic-ui-react";
import { render } from "@testing-library/react";

const typeOptions = [
  { key: "web", text: "Web", value: "Web" },
  { key: "app", text: "App", value: "App" },
];
class CreateProjectPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      type: "",
      description:"",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  

  handleChange(event, field){
    console.log(field)
    this.setState({ [field]: event.target.value }) 
  }

  handleSearchChange(event,value,field){
    this.setState({ [field]: value }) 
  }

  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault();
  }

  render() {
    const { name, type, description } = this.state

    return (
      <div>
        <Header as="h3">프로젝트 시작</Header>
        <Container textAlign="justified">
          <b>Description</b>
          <Divider />
          <Form onSubmit={this.handleSubmit}>
            <Form.Field
              placeholder="ProjectName"
              name="projectname"
              value={name}
              onChange={(event)=>this.handleChange(event, "name")}
            >
              <label>프로젝트명</label>
              <input placeholder="Project Name" />
            </Form.Field>
            <Form.Group widths="equal">
              <Form.Field
                control={Select}
                options={typeOptions}
                label={{
                  children: "분야",
                  htmlFor: "form-select-control-gender",
                }}
                placeholder="Type"
                search
                searchInput={{ id: "form-select-control-gender" }}
                onChange={(event,{value})=>this.handleSearchChange(event,value,"type")}
              />
            </Form.Group>
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Opinion"
              placeholder="Opinion"
              name={description}
              onChange={(event)=>this.handleChange(event, "description")}
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
        </Container>
      </div>
    );
  }
}

export default CreateProjectPage;
