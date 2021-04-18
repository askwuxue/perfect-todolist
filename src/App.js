import React, { Component } from 'react'
import './App.css';
import Input from './component/Input/Input';
import List from './component/Content/Content'

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
  handleChange = (e, id) => {
    // 根据checkbox的改变，重新处理数据并setState
    data.forEach(ele => {
      if (ele.id === id) {
        ele.isFinished = !ele.isFinished
      }
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
  handleAddList = (content) => {
    const lastId = Number.parseInt(data[data.length - 1].id);
    // 添加的元素的id
    let id = (lastId + 1).toString(10).padStart(13, '0');

    data.push({
      "id": id,
      "isFinished": false,
      "contents": content,
      "isDeleted": false
    })
    this.setState({data});
  } 

  render() {
    return (
    <div className="App">
      <h1>todoList</h1>
      <Input handleAddList={this.handleAddList}/>
      <List list={this.state} handleChange={this.handleChange} handleDelete={this.handleDelete} />
    </div>
    )
  }
}
