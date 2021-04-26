import React, { Component } from 'react';
import Header1 from "./Header.js";
import { List, Card,Spin,Button} from 'antd';
import "antd/dist/antd.min.css";
import axios from 'axios';
axios.defaults.baseURL="https://frozen-plateau-78919.herokuapp.com/";
const { Meta } = Card;
class About extends Component {
  state={
    dat:[],
    s:true
  }
componentDidUpdate()
{
  axios.get('/ge').then((res)=>{
      this.setState({dat:res.data,s:false});
    });
};
componentDidMount()
{console.log(this.state.dat);
  axios.get('/ge').then((res)=>{
      this.setState({dat:res.data});
    });
};
oc=(it)=>{
  axios.post('/del',it).then((req,res)=>{
    console.log(res);
  })
}
  render() {
    return (
      <div>
      <Header1>2</Header1>
      <center><h1>About</h1></center>
     
      
    <center>   
    {(this.state.s) ? <Spin size="large" /> : <List
    grid={{
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5,
      xxl: 3,
    }}
    dataSource={this.state.dat}
    renderItem={item => (
      <List.Item actions={[<Button onClick={()=>{this.oc(item)}}>delete</Button>]}>
        <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg" />}
  >
    <Meta title={item.pname} description={"Rs."+item.price} />
    {item.pdesc}
  </Card>
      </List.Item>
    )}
  />}</center>
      </div>
    )
  }
}
export default About;