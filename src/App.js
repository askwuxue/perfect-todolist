import React, { Component } from 'react'
import './App.css';
import Input from './component/Input/Input';
import Content from './component/Content/Content';

// 模拟后端接收到的数据
const response = {
  "status": 200,
  "data": [
    {
      "id": "0000000000001",
      "isFinished": false,
      "contents": "hekadldf",
      "isDeleted": false
    },
    {
      "id": "0000000000002",
      "isFinished":false,
      "contents": "fdsafasd",
      "isDeleted": false
    },
    {
      "id": "0000000000003",
      "isFinished":false,
      "contents": "sdfasdf",
      "isDeleted": false
    },
    {
      "id": "0000000000004",
      "isFinished":true,
      "contents": "werwer",
      "isDeleted": false
    },
    {
      "id": "0000000000005",
      "isFinished":false,
      "contents": "jrtu",
      "isDeleted": true
    }    
  ],
  "message": "ok"
}

// 数据简单处理
let data;
if (response.status === 200) {
  data = response.data
}

// TODO function组件没法管理state
export default class App extends Component {
  state = {data}
  handleChange = (id) => {
    // 更新数据
    data = data.map(item => {
      if (id === item.id) {
        // TODO 解构赋值可以用于更新对象中某个属性的值
        return {...item, "isFinished": !item.isFinished}
      }
      return item
    });
    this.setState({data})
  }

  // 根据用户的点击删除处理数据
  handleDelete = (id) => {
    data.forEach(ele => {
      if (ele.id === id) {
        ele.isDeleted = !ele.isDeleted
      }
    });
    this.setState({data})  
  }

  // 根据用户输入添加list
  handleAddList = (id, content) => {
    let newItem = {
      "id": id,
      "isFinished": false,
      "contents": content,
      "isDeleted": false
    };

    data = [newItem, ...data];

    this.setState({data});
  } 

  render() {
    const list = {item: this.state, handleChange: this.handleChange, handleDelete: this.handleDelete};
    return (
    <div className="App">
      <h1>todoList</h1>
      <Input handleAddList={this.handleAddList}/>
      <Content list={list}/>
    </div>
    )
  }
}
