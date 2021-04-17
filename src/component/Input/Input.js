import React, { Component } from 'react'
import  './Input.css'

export default class Input extends Component {
    render() {
        return (
            <div className='input'>
                <input className='input input_todo'  placeholder="请输入您的list" />
            </div>
        )
    }
}
