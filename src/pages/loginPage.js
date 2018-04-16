import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Button } from 'antd'

const FormItem = Form.Item

class Login extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })

    const { actions } = this.props
    actions.login()
  }
  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem
          label="username"
        >
          {getFieldDecorator(
            'username',
            {
              rules: [{
                required: true,
                message: 'please input you username!',
              }],
            },
          )(<Input placeholder="username" />)}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={this.props.loginButton}
          >
            TEST
          </Button>
        </FormItem>
      </Form>
    )
  }
}

Login.propTypes = {
  loginButton: PropTypes.bool,
  form: PropTypes.object,
  actions: PropTypes.object,
}

export default Form.create({
  mapPropsToFields (props) {
    return {
      username: Form.createFormField({
        ...props.username,
        value: props.username.value,
      }),
    }
  },
  onFieldsChange (props, changedFields) {
    props.actions.loginFormChange(changedFields)
  },
})(Login)
