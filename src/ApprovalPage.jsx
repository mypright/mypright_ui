import React from 'react';
import { Button,Collapse, Alert, Icon, PageHeader, Card  } from 'antd';


const {Panel} = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

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

function ApprovalPage() {
  const data = {
    portalDetails: {
      name: 'Google'
    },
    dataPoints: [
      {
        id: 1,
        title: 'Email Address',
        description: text
      },
      {
        id: 1,
        title: 'Aadhaar Number',
        description: text
      },
      {
        id: 1,
        title: 'Passport ID',
        description: text
      }
    ]
  }
  return (
    <section className="container">
      <PageHeader style={{margin: pageMargin, padding: 0}}>
        <h1 style={{margin: 0}}>
          Approval request
        </h1>
      </PageHeader>
      <Card style={{margin: pageMargin}}><b>{data.portalDetails.name}</b> is requesting access to your account:</Card>
      <Alert
        style={{margin: pageMargin}}
        message="Warning"
        description="Please be careful and hide your arse."
        type="warning"
      />
      <Collapse
        style={{background: 'none'}}
        bordered={false}
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
      >
        {
          data.dataPoints.map(point => (
            <Panel header={point.title} key={point.id} style={customPanelStyle}>
              <p>{point.description}</p>
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
        <Button type="primary" size="large">Approve Request</Button>
      </Button.Group>
    </section>
  );
}

export default ApprovalPage;
