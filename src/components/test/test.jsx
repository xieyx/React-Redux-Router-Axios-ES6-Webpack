import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class Test extends Component {
    constructor(props) {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
              console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { actions } = this.props;
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem
                    label="username"
                >
                    {getFieldDecorator('username', {
                        rules: [{
                            required: true,
                            message: 'please input you username!',
                        }],
                    })(
                        <Input placeholder="username" />
                    )}
                </FormItem>
                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={this.props.testButton}
                    >
                        TEST
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

Test = Form.create({
    mapPropsToFields(props) {
        return {
            username: Form.createFormField({
                ...props.username,
                value: props.username.value
            })
        }
    },
    onFieldsChange(props, changedFields) {
        props.actions.testFormChange(changedFields);
    }
})(Test);

export default Test;