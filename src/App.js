import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Jobs from './components/Jobs'

import JobItemDetails from './components/JobItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" Component={Login} />
        <ProtectedRoute exact path="/" Component={Home} />
        <ProtectedRoute exact path="/jobs" Component={Jobs} />
        <ProtectedRoute exact path="/jobs/:id" Component={JobItemDetails} />
        <Route path="/not-found" Component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    )
  }
}

export default App
