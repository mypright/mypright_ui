import React, { useState, useEffect,  } from 'react';
import { Card, Collapse, Icon, PageHeader, List, Avatar  } from 'antd';
import Skeleton from 'react-loading-skeleton'
import LoginForm from './LoginForm'

const {Panel} = Collapse;

const pageMargin = 25;

const customPanelStyle = {
  background: '#edeff7',
  borderRadius: 4,
  marginLeft: pageMargin,
  marginRight: pageMargin,
  marginTop: pageMargin / 2,
  marginBottom: pageMargin / 2,
  border: 0,
  overflow: 'hidden',
};

function LoginPage() {
  return (
    <section className="container" style={{width: '40%'}}>
      <PageHeader style={{margin: pageMargin, padding: 0}}>
        <h1 style={{margin: 0}}>
          Example user login
        </h1>
      </PageHeader>
      <div style={{
        padding: pageMargin,
        margin: '0 auto'
      }}>
        <LoginForm />
      </div>
    </section>
  );
}

export default LoginPage;
