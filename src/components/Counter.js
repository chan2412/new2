import React, { Component } from 'react'

class Counter extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
         count:1,

     }
    }

    
 
 change(){
     //this.state.count+=this.state.count-->this show increase 
     //count in console not in UI Bcoz state never change directely
     this.setState({
         count:this.state.count-1
     })
     console.log(this.state.count)
 }
// {/*re(){
  //   this.setState({
    //     count1:this.state.count-1
  //   })
   //  console.log(this.state.count1)
// }*/}
 



    render() {
        return (
            <div>
                <h1>Count-{this.state.count}</h1>
                <button onClick = { () =>this.change()}>Click See the Magicincre</button>
                {/*<button onClick={()=>this.re()}>Rechange</button>*/}
            </div>
        )
    }
}

export default Counter;