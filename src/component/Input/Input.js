import React, { Component } from 'react'
import  './Input.css'

export default class Input extends Component {

    // constructor(props) {
    //     super(props);
    // }

    handleAddList = (content) => {
        console.log(this.props);
        this.props.handleAddList(content);
    }

    // 输入框失去焦点添加list
    handleOnblur = (e) => {
        let content = e.target.value;
        if (content.trim()) {
            this.handleAddList(content);
            e.target.value = ''; 
        }
    }

    // 输入框用户按下回车添加list
    handleOnKeyPress = (e) => {
        if (e.code === 'Enter') {
            let content = e.target.value;
            if (content.trim()) {
                this.handleAddList(content);
                e.target.value = ''; 
            }
        }
    } 

    render() {
        return (
            <div className='input'>
                <input className='input input_todo'  placeholder="请输入您的list" onBlur={this.handleOnblur} onKeyPress={this.handleOnKeyPress}/>
            </div>
        )
    }
}
