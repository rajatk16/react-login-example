import React, { useState } from 'react'
import { Form, Label, Input, Button, Message } from 'semantic-ui-react'
import APIKit from '../util/API'

const Login = props => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [response, setResponse] = useState({
    success: '',
    error: '',
  })

  const handleChange = event => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async () => {
    try {
      const { data } = await APIKit.post('/auth/login', formData)
      setResponse({
        success: `Logged in as ${data.data.user.firstName} ${data.data.user.lastName}`,
      })
    } catch (error) {
      setResponse({
        error: error.response.data.message,
      })
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Label>Email</Label>
          <Input
            placeholder="Email"
            name="email"
            onChange={handleChange}
            required
          />
        </Form.Field>
        <Form.Field>
          <Label>Password</Label>
          <Input
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
      {response.success ? (
        <Message success>{response.success}</Message>
      ) : response.error ? (
        <Message error>{response.error}</Message>
      ) : (
        <Message info>Please Login To Continue</Message>
      )}
    </div>
  )
}

export default Login
