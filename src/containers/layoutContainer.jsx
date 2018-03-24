import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class Layout extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/">Demo</Link></li>
                    <li><Link to="/test">test</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;
