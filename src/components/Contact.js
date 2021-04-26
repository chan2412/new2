import React, { Component } from 'react';
import Header1 from "./Header.js";
import { Input,Button } from 'antd';
import "antd/dist/antd.css";
import axios from 'axios';
import "../App.css";
axios.defaults.baseURL="https://frozen-plateau-78919.herokuapp.com/";
const { TextArea } = Input;
class Contact extends Component {
	

  state = {
      pn:"",
      pv:'',
      pd:''
    };
    cn=(event)=>{
      this.setState({pn:event.target.value});
    }
    cv=(event)=>{
      this.setState({pv:event.target.value});
    }
    cd=(event)=>{
      this.setState({pd:event.target.value});
    }
x=()=>{
  var data=this.state;
  axios.post("/Add",data)
                .then((res) => {
                  console.log(res);
                  });
                this.setState({pn:'',pv:'',pd:''});
}
  render() {
    return (
      <div>
      <Header1>3</Header1>
      <center><h1>Contact</h1></center>
      <p>Enter product name:</p>
      <Input
        type='text'
        name='username'
        value={this.state.pn}
        onChange={this.cn}
      />
      <p>Enter Price:</p>
      <Input
        type='text'
        name='age'
        value={this.state.pv}
        onChange={this.cv}
      />
      <p>Enter Desc:</p>
      <TextArea rows={4}
        name='age'
        value={this.state.pd}
        onChange={this.cd}
        />
      <Button onClick={this.x}>Submit</Button>
      </div>
    )  
  }
}
export default Contact;