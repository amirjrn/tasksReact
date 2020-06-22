import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/login'
import Tasks from './pages/tasks'
import './App.css'
import Register from './pages/register'
import history from './utils/history'
function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/tasks" component={Tasks}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
