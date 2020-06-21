import React from 'react'
import { BrowserRouter as Router, Link, Route, useHistory } from 'react-router-dom'
import Login from './pages/login'
import './App.css'
import Register from './pages/register'
import history from './components/history'
function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Register />
      </div>
      <Route path="/login" component={Login}></Route>
    </Router>
  )
}

export default App
