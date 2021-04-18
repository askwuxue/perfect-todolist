import React, { Component } from 'react'

export default class List extends Component {
    // constructor(props) {
    //     super(props);
    //     // console.log(this.props);
    // }

    handleCheckboxChange = (e) => {
        console.log(e.target.checked);
        this.props.handleChange(e.target.checked, this.props.item.id);
    }

    handleDelete = () => {
        console.log(this.props.item.id);
        this.props.handleDelete(this.props.item.id);
    }

    render() {
        console.log(this.props);
        const data = this.props.item;
        const className = data.isFinished ? "list-item list-finish" : "list-item";
        return (
            <li className={className}>
                <input type="checkbox" onChange={this.handleCheckboxChange}  defaultChecked={data.isFinished}  className="list-operate list-checkbox"/>{data.contents}<input type="button" onClick={this.handleDelete}  value="delete" className="list-operate list-delete" />
            </li>
        )
    }
}
