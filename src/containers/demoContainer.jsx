import React from 'react';
import { render } from 'react-dom';
import { Button } from 'antd';

class Demo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
               demo1 
            </div>
        )
    }
}

export default Demo;
