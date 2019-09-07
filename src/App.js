import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd'
import { Router, Link } from '@reach/router'

const ApprovalPage = () => <Link to="/portal"><Button>Portal signup page</Button></Link>
const PortalSignUpPage = () => <Link to="/approval"><Button>Approval page</Button></Link>

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
