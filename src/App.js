import React, { Component } from 'react';
import {Input} from 'antd';
import { Layout} from 'antd';
import "antd/dist/antd.min.css";
import './App.css';
const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Layout className="layout">
    <Header>
      <div className="logo" />
      <center><h1><font color="white">Chan</font></h1></center>
    </Header>
    <Content style={{ padding: '0 50px',minHeight:"480px" }}>
      <center>
    <div className="box">
          <label>Username:</label>
          <Input></Input>
          <br/>
          <label>Password:</label>
          <Input></Input>
          </div>
          </center>
    </Content>
    <Footer style={{ textAlign: 'center' }}> Created by Chan</Footer>
  </Layout>
      </div>
    );
  }
}

export default App;