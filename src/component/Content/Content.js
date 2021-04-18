import React, { Component } from 'react'
import './Content.css'
import List from './List'

export default class Content extends Component {
    render() {
        const content = this.props.list.data;
        const handleChange = this.props.handleChange;
        const handleDelete = this.props.handleDelete;
        return (
            <div className="list">
                <ul>
                    {content.map(item => {
                        return <List item={item} key={item.id} handleChange={handleChange} handleDelete={handleDelete}/>
                    })}
                </ul>
            </div>
        )
    }
}
