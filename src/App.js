import React, { Component } from 'react'
import './App.css';
import Input from './component/Input/Input';
import List from './component/List/List'

const Data = {
  "status": 200,
  "data": [
    {
      "isFinished":false,
      "contents": "test1",
      "isDeleted": false
    },
    {
      "isFinished":false,
      "contents": "test2",
      "isDeleted": false
    },
    {
      "isFinished":false,
      "contents": "test2",
      "isDeleted": false
    },
    {
      "isFinished":false,
      "contents": "test2",
      "isDeleted": false
    },
    {
      "isFinished":false,
      "contents": "test2",
      "isDeleted": false
    }    
  ],
  "message": "ok"
}


// TODO function组件没法管理state
export default class App extends Component {
  state = Data
  render() {
    return (
    <div className="App">
      <h1>todoList</h1>
      <Input data={this.statey}/>
      <List />
    </div>
    )
  }
}
