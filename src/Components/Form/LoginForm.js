import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import { connect } from "react-redux";
import { login } from "../../Actions";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, field) {
    console.log(field);
    this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    var user = {
      user_id: this.state.user_id,
      password: this.state.password,
    };
    this.props.login(user);
    event.preventDefault();
  }
  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Log-in to your account
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                onChange={(event) => this.handleChange(event, "user_id")}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={(event) => this.handleChange(event, "password")}
              />

              <Button color="teal" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = ({user}) => {
    console.log(user);
  return {
    user: user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch(login(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
