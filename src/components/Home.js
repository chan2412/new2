import React, { Component } from 'react';
import Header1 from "./Header.js";
import {Input,Button} from "antd";
import { List,Space} from 'antd';
import readXlsxFile from 'read-excel-file';
import "antd/dist/antd.css";
import "../App.css";

class Home extends Component {
  state={
g:[],
qn:[],
c1:[],
c2:[],
c3:[],
c4:[],
crt:[],
z:[]
  }
  
  inpu=(vlaue)=>{
    var input=vlaue.target;
    console.log(input);
    readXlsxFile(input.files[0]).then((rows) => {
      for(var i=0;i<rows.length;i++)
      {
        var ro=rows[i];
        var q=this.state.qn;
        var c1=this.state.c1;
        var c2=this.state.c2;
        var c3=this.state.c3;
        var c4=this.state.c4;
        var ct=this.state.crt;
        q.push(ro[1]);
        c1.push(ro[2]);
        c2.push(ro[3]);
        c3.push(ro[4]);
        c4.push(ro[5]);
        ct.push(ro[6]);
        this.setState({qn:q});
        this.setState({c1:c1});
        this.setState({c2:c2});
        this.setState({c3:c3});
        this.setState({c4:c4});
        this.setState({crt:ct});
      }
      console.log("hellllllllllllllo",rows);
    
    })
  }
  hh=()=>{

    var q=this.state.qn;
    var c1=this.state.c1;
    var c2=this.state.c2;
    var c3=this.state.c3;
    var c4=this.state.c4;
    var ct=this.state.crt;
    for(var dd=0;dd<q.length;dd++){
      var def=this.state.z;
var rr={
  'question':q[dd],
  'option1r':[c1[dd],c2[dd],c3[dd],c4[dd]],
  'crt':ct[dd]
}
    def.push(rr);
    this.setState({z:def});
  }
  console.log(def);
}
  render() {
    return (
      <div>
      <Header1>1</Header1>
       <div className="hme">
<Input type="file" onChange={this.inpu}></Input>
<Button onClick={this.hh}>click</Button>
      <List
    itemLayout="horizontal"
    dataSource={this.state.z}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          title={<p>{item.question}</p>}
          description={<p><font color="red">{item.option1r[(item.crt)-1]}</font></p>}
        />
        <div>{item.crt}</div>
      </List.Item>
    )}
  />
       </div>
      </div>
    )
  }
}
export default Home;