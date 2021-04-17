import React, { Component } from 'react'
import './List.css'

export default class List extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        // console.log(this.props);
        return (
            <div className="list">
                <ul>
                    <li className="list-item">
                        <input type="checkbox" className="list-operate list-checkbox"/>test<input type="button" value="delete" className="list-operate list-delete" />
                    </li>
                    
                    <li className="list-item">
                        <input type="checkbox" className="list-operate list-checkbox"/>test<input type="button" value="delete" className="list-operate list-delete" />
                    </li>
                    <li className="list-item">
                        <input type="checkbox" className="list-operate list-checkbox"/>test<input type="button" value="delete" className="list-operate list-delete" />
                    </li>
                    <li className="list-item">
                        <input type="checkbox" className="list-operate list-checkbox"/>test<input type="button" value="delete" className="list-operate list-delete" />
                    </li>
                    <li className="list-item">
                        <input type="checkbox" className="list-operate list-checkbox"/>test<input type="button" value="delete" className="list-operate list-delete" />
                    </li>
                    <li className="list-item">
                        <input type="checkbox" className="list-operate list-checkbox"/>test<input type="button" value="delete" className="list-operate list-delete" />
                    </li>
                </ul>
            </div>
        )
    }
}
