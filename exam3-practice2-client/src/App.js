import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';

function App() {
  //const [phoneNumber, setPhoneNumber] = useState();
  const [tenantId, setTenantId] = useState(-1);

  const onValidatedPhone = (tenantid) => setTenantId(tenantid);
  console.log(tenantId);

  if(tenantId === -1) {
    return <Login onValidatedPhone={onValidatedPhone}/>
  } else 

  {return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );}
}

export default App;