import React, { useState, useEffect } from 'react';
import { Button,Collapse, Alert, Icon, PageHeader, Card, Spin } from 'antd';
const { Panel } = Collapse;

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

const APPROVAL_API = "https://myprightservice.herokuapp.com/site/data?uniqueSiteId="
const APPROVE_API = "https://myprightservice.herokuapp.com/site/approve"

function approve(uniqueSiteId) {
  fetch(APPROVE_API, {
      method: 'post',
      mode: 'cors',
      body: {
        uniqueSiteId: uniqueSiteId,
        approved: true
      },
      headers: {
          'Content-Type': 'application/json',
      }
  })
  .then(res => {
    if(res.status === 200) {
      alert("Approved")
    } else {
      alert("Try Again")
    }
  })
  .catch(exc => console.log(exc))
}

function ApprovalPage() {

  const [errors, setErrors] = useState(true);

  const [fieldsRequired, setFieldsRequired] = useState([]);
  const [requestingSite, setRequestingSite] = useState("");

  const uniqueSiteId = new URL(window.location.href).searchParams.get("uniqueSiteId")

  useEffect(() => {
    fetch(APPROVAL_API + uniqueSiteId)
      .then(res => res.text())
      .then(res => {
        try {
          const body = JSON.parse(res).siteRequest
          if(body.siteUrl && body.userDetail) {
            setFieldsRequired(body.userDetail || [])
            setRequestingSite(body.siteUrl || "")
            setErrors(false)
          }
        } catch(e) {
          console.log(e)
        }
      })
      .catch(() => setErrors(true))
  });

  return (
    <section className="container">
      <PageHeader style={{margin: pageMargin, padding: 0}}>
        <h1 style={{margin: 0}}>
          Approval request
        </h1>
      </PageHeader>
      <Spin spinning={errors}>
        <Card style={{margin: pageMargin}}><b>{requestingSite}</b> is requesting access to your account:</Card>
        <Alert
          style={{margin: pageMargin}}
          message="Warning"
          description="Please be careful."
          type="warning"
        />
        <Collapse
          style={{background: 'none'}}
          bordered={false}
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
        >
          {
            fieldsRequired.map((detail, id) => (
              <Panel header={detail.detailName} key={id} style={customPanelStyle}>
                <p>{detail.reason}</p>
              </Panel>
            ))
          }
        </Collapse>
        <Button.Group style={{
          display: 'flex',
          marginTop: pageMargin,
          marginBottom: pageMargin,
          flexFlow: 'row wrap',
          justifyContent: 'center'
        }}>
          <Button type="primary" size="large" onClick={() => approve(uniqueSiteId)}>
            Approve Request
          </Button>
        </Button.Group>
      </Spin>
    </section>
  );
}

export default ApprovalPage;
