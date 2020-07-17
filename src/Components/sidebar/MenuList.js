import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class MenuList extends React.Component {

  render() {
    return (
      <div >
        <Menu.Item as="li">
          
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
          <Link to="/tags">tags</Link>
        </Menu.Item>
      </div>
    );
  }
  
};


export default MenuList;
