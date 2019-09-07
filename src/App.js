import React from 'react';
import './App.css';
import { Router } from '@reach/router'
import ApprovalPage from './ApprovalPage'
import PortalSignUpPage from './PortalSignUpPage'
import ProfilePage from './ProfilePage'

function App() {
  return (
    <div className="App">
      <Router>
        <ApprovalPage path="/approval" />
        <PortalSignUpPage path="/portal" />
        <ProfilePage path="/profile" />
      </Router>
    </div>
  );
}

export default App;
