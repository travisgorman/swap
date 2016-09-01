import {Router, Route, browserHistory} from 'react-router'
import React from 'react'
import Login from './Components/Login'
import Signup from './Components/Signup'
import App from './Components/App'
import MyProfile from './Components/MyProfile'
import EditMyProfile from './Components/EditMyProfile'
import GetMessages from './Components/GetMessages'
// import Search from './Components/Search'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Login} />
    <Route path="signup" component={Signup} />
    <Route path="app" component={App} />
    <Route path="getMessages" component={GetMessages} />
    <Route path="myProfile" component={MyProfile} />
    <Route path="editMyProfile" component={EditMyProfile} />
  </Router>
)
