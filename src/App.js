import React from 'react';
import './assets/App.css';
import { Router } from '@reach/router'
import ApprovalPage from './pages/ApprovalPage'
import PortalSignUpPage from './pages/PortalSignUpPage'
import ProfilePage from './pages/ProfilePage'

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
