import React from "react";
import {  Menu, Segment, Sidebar } from "semantic-ui-react";
import MenuList from "./MenuList";
import { Route, Switch } from "react-router-dom";

import CommonLayout from "../Layout/CommonLayout";

import CreatePojectPage from "../../Pages/CreatePojectPage";
import ProjectsPage from "../../Pages/ProjectsPage";
import DashboardPage from "../../Pages/DashboardPage";
import { connect } from "react-redux";
import LoginForm from "../Form/LoginForm";

const PushableSidebar = ({ user }) => {
  const [showSideBar, setShowSideBar] = React.useState(false);
  const onClick = () => setShowSideBar(!showSideBar);
  return (
    <>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="uncover"
          icon="labeled"
          inverted
          vertical
          visible={showSideBar}
          width="thin"
        >
          <MenuList login={true} />
        </Sidebar>

        <Sidebar.Pusher>
          <Menu>
            <Menu.Item onClick={onClick}>Menu</Menu.Item>
            
          </Menu>

          <Switch>
            <RouteWrapper path="/login" layout={LoginForm} />
            <RouteWrapper
              path="/home"
              component={DashboardPage}
              layout={CommonLayout}
            />
            <RouteWrapper
              path="/new"
              component={CreatePojectPage}
              layout={CommonLayout}
            />
            <RouteWrapper
              path="/projects"
              component={ProjectsPage}
              layout={CommonLayout}
            />
            <RouteWrapper
              path="/tags"
              component={ProjectsPage}
              layout={CommonLayout}
            />
          </Switch>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(PushableSidebar);
