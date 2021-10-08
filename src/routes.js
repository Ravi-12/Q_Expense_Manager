import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Dashboard from '././Commponents/Dashboard/Dashboard-main'
import MyAccount from "./Components/MyAccount/MyProfile"
import MyGroups from "./Components/MyGroups/MyGroups"
import logout from "./Components/SignIn/Login"

function routes() {
    
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/Myaccount" exact component={MyAccount}/>
            <Route path="/Mygroups" exact component={MyGroups}/>
            <Route path="/logout" exact component={logout}/>
          </Switch>
          </BrowserRouter>
      )
  }
  
  export default routes