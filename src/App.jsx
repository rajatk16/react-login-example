import React from 'react'
import { Container } from 'semantic-ui-react'

import './App.css'
import Login from './pages/Login';

const App = () => {
  return (
    <Container>
      <h1 className="title">Login</h1>
      <Login />
    </Container>
  )
}

export default App
