import React, { Component } from 'react'

export default class List extends Component {

    handleCheckboxChange = (id) => {
        this.props.handleChange(this.props.item.id);
    }

    handleDelete = () => {
        this.props.handleDelete(this.props.item.id);
    }

    render() {
        const {item} = this.props;
        const isDeleted = item.isDeleted;
        const className = item.isFinished ? "list-item list-finish" : "list-item";
        // 根据条件渲染如果已经删除就不渲染
        if (!isDeleted) {
            return (
                <li className={className}>
                    <input type="checkbox"
                        onChange={this.handleCheckboxChange}  
                        // TODO这个地方使用defaultChecked只会在第一次有效
                        checked={item.isFinished} 
                        className="list-operate list-checkbox"
                    />
                    {item.contents}
                    <input 
                        type="button" 
                        onClick={this.handleDelete}  
                        value="delete" 
                        className="list-operate list-delete" 
                    />
                </li>
            )
        }
        return null;
    }
}
