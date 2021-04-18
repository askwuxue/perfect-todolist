import React, { Component } from 'react'

export default class List extends Component {
    // constructor(props) {
    //     super(props);
    //     // console.log(this.props);
    // }

    handleCheckboxChange = (e) => {
        this.props.handleChange(e.target.checked, this.props.item.id);
    }

    handleDelete = () => {
        this.props.handleDelete(this.props.item.id);
    }

    render() {
        const isDeleted = this.props.item.isDeleted;
        const data = this.props.item;
        const className = data.isFinished ? "list-item list-finish" : "list-item";
        // 根据条件渲染如果已经删除就不渲染
        if (!isDeleted) {
            return (
                <li className={className}>
                    <input type="checkbox"
                        onChange={this.handleCheckboxChange}  
                        defaultChecked={data.isFinished}  
                        className="list-operate list-checkbox"
                    />
                    {data.contents}
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
