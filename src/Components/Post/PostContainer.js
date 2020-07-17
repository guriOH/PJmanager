import React from "./node_modules/react";

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
  Icon,Step
} from "./node_modules/semantic-ui-react";

const typeOptions = [
  { key: "web", text: "Web", value: "Web" },
  { key: "app", text: "App", value: "App" },
];
const PostContainer = () => (
  <div>
    <Container textAlign="justified">
      <Divider />
      <Form>
        <Form.Field>
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
          />
        </Form.Group>
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Opinion"
          placeholder="Opinion"
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

export default PostContainer;
