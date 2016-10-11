import React from 'react';
import { render } from 'react-dom';

class Layout extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                layout222
                {this.props.children}
            </div>
        )
    }
}

export default Layout;
