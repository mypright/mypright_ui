import React, { useState, useEffect, useRef } from 'react';
import { Button,Collapse, Alert, Icon, PageHeader, Card, List, Avatar  } from 'antd';

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
  const API = 'https://myprightservice.herokuapp.com/site/data/all';
  const [loadedState, setLoadedState] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(API)
      const json = await data.json()
      return json
    }
    if (!loadedState) {
      setData([...data, fetchData()])
      setLoadedState(true)
    }
  }, [data, loadedState]);

  const AccountList = (
    <List
      style={{margin: pageMargin}}
      itemLayout="vertical"
      dataSource={data}
      renderItem={item => (
        <Collapse
            style={{background: 'none'}}
            bordered={false}
            defaultActiveKey={[]}
            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
          >
            <Panel header={`${item.id} - ${item.siteUrl}`} style={customPanelStyle}>
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href={item.siteUrl}>{item.siteUrl}</a>}
                  description={`Uses lol`}
                />
                <h3
                  style={{
                    marginLeft: pageMargin * 2,
                    marginRight: pageMargin * 2,
                    marginTop: pageMargin,
                    marginBottom: pageMargin
                  }}
                >
                  Details
                </h3>
                <Collapse
                  style={{background: 'none', margin: pageMargin}}
                  bordered={false}
                  defaultActiveKey={[]}
                  expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                >
                  {
                    item.userDetail.map((detail, id) => (
                      <Panel header={detail.detailName} key={id} style={{...customPanelStyle, background: '#f6f8ff'}}>
                        <p>{detail.reason}</p>
                      </Panel>
                      
                    ))
                  }
                </Collapse>
              </List.Item>
            </Panel>
        </Collapse>
      )}
    />
  )
  
  
  return (
    <section className="container">
      <PageHeader style={{margin: pageMargin, padding: 0}}>
        <h1 style={{margin: 0}}>
          Your data profile
        </h1>
      </PageHeader>
      {loadedState ? AccountList : 'Loading...'}
    </section>
  );
}

export default ApprovalPage;
