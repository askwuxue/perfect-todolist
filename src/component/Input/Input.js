import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import  './Input.css'

export default class Input extends Component {

    constructor(props) {
        super(props);
        // 使用ref自动获得焦点
        this.textInput = React.createRef();
   }

    // 自动获得焦点
    focusTextInput = () => {
        this.textInput.current.focus();
    }

    handleAddList = (content) => {
        let id = nanoid();
        this.props.handleAddList(id, content);
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

    // 页面挂载完毕，调用自动获得焦点，只调用一次
    componentDidMount() {
        console.log('componentDidMount: ');
        this.focusTextInput();
    }

    render() {
        return (
            <div className='input'>
                <input 
                    className='input input_todo'  
                    placeholder="请输入您的list" 
                    onBlur={this.handleOnblur} 
                    onKeyPress={this.handleOnKeyPress}
                    ref={this.textInput}
                />
            </div>
        )
    }
}
