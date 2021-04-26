import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "antd/dist/antd.min.css";
import {Layout,Menu} from 'antd';
import "./Header.css"
const {Header}=Layout;
class Header1 extends Component {
  render() {
    return (
      <div>
  <Header className="header">
      <div className="logo" />
      <Menu theme="dark" className="he" mode="horizontal" 
      defaultSelectedKeys={[this.props.children]}
      >
        <Menu.Item key='1'><Link to="/new2">Home</Link></Menu.Item>
        <Menu.Item key='2'><Link to="/new2/About">About</Link></Menu.Item>
        <Menu.Item key='3'><Link to="/new2/Contact">Contact</Link></Menu.Item>
      </Menu>
    </Header>
</div>
    )
  }
}
export default Header1;