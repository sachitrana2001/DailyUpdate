import React, { Component } from 'react'
import Counter from './components/Counter'

export default class App extends Component {
   
  constructor(){
    super()
    this.state={
      count : 0
    }
  }
  increment() {
    this.setState({count : this.state.count + 1})
  }
  componentDidMount(){
    console.log("componentDidMount:when the componentdidmount is rendered")
  }
  componentWillUnmount(){
    console.log("componentwillunmount:component removed")
  }
  render() {
    return (
      <div>
        <Counter number={this.state.count}/>
        <button onClick={()=> {this.increment()}}>click me!</button>
      </div>
    )
  }
}

