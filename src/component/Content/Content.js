import React, { Component } from 'react'
import './Content.css'
import List from './List'

export default class Content extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        console.log(this.props.list.data);
        const content = this.props.list.data;
        const handleChange = this.props.handleChange;
        const handleDelete = this.props.handleDelete;
        // console.log('handleChange: ', handleChange);
        return (
            <div className="list">
                <ul>
                    {content.map(item => {
                        if (!item.isDeleted) {
                            return <List item={item} key={item.id} handleChange={handleChange} handleDelete={handleDelete}/>
                        }
                    })}
                </ul>
            </div>
        )
    }
}
