import React from "react";
import { Icon, Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const MenuList = () => {
  return (
    <div>
      <Menu.Item as="li">
        <Icon name="sign-in" />
        <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item as="li">
        <Icon name="home" />
        <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item as="li">
        <Icon name="pencil alternate" />
        <Link to="/new">New</Link>
      </Menu.Item>
      <Menu.Item as="li">
        <Icon name="tag" />
        <Link to="/projects">Projects</Link>
      </Menu.Item>
      <Menu.Item as="li">
        <Icon name="tag" />
        <Link to="/tag">tags</Link>
      </Menu.Item>
    </div>
  );
};
