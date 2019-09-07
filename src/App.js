import React from 'react';
import './App.css';
import { Button } from 'antd'
import { Router, Link } from '@reach/router'

import PortalSignUpPage from './PortalSignUpPage'

const ApprovalPage = () => <Link to="/portal"><Button>Portal signup page</Button></Link>

function App() {
  return (
    <div className="App">
      <Router>
        <ApprovalPage path="/approval" />
        <PortalSignUpPage path="/portal" />
      </Router>
    </div>
  );
}

export default App;
