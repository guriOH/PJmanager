import React from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import { MenuList } from "./MenuList";
import { Route, Switch } from "react-router-dom";

import CommonLayout from "../Layout/CommonLayout";

import CreatePojectPage from "../../pages/CreatePojectPage";
import ProjectsPage from "../../pages/ProjectsPage";
import DashboardPage from "../../pages/DashboardPage";

const PushableSidebar = () => {
  const [showSideBar, setShowSideBar] = React.useState(false);
  const onClick = () => setShowSideBar(!showSideBar);
  return (
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
        <MenuList />
      </Sidebar>

      <Sidebar.Pusher>
        <Menu>
          <Menu.Item onClick={onClick}>Menu</Menu.Item>
        </Menu>

        <Segment basic style={{ height: "100vh" }}>
          <Switch>
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
              component={CreatePojectPage}
              layout={CommonLayout}
            />
          </Switch>
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
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

export default PushableSidebar;
