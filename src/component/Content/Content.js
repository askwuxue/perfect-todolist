import React, { Component } from 'react'
import './Content.css'
import List from './List'

export default class Content extends Component {
    render() {
        const {item, handleChange, handleDelete} = this.props.list;
        const content = item.data;
        return (
            <div className="list">
                <ul>
                    {content.map(item => {
                        return <List item={item} handleChange={handleChange} handleDelete={handleDelete}  key={item.id}/>
                    })}
                </ul>
            </div>
        )
    }
}
