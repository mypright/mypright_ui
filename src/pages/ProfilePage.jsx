import React, { useState, useEffect,  } from 'react';
import { Button,Collapse, Icon, PageHeader, List, Avatar  } from 'antd';
import Skeleton from 'react-loading-skeleton'

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

const APPROVE_API = `${process.env.REACT_APP_BACKEND}/site/approve`
const PROFILE_API = `${process.env.REACT_APP_BACKEND}/site/data/all`


function ApprovalPage() {
  const [loadedState, setLoadedState] = useState(false);
  const [data, setData] = useState(new Set());

  function revokePermissions(uniqueSiteId) {
    fetch(APPROVE_API, {
        method: 'post',
        body: {
          uniqueSiteId: uniqueSiteId,
          approved: false
        },
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => {
      if(res.status === 200) {
        const newset = new Set(Array.from(data.values()))
        for (let item of newset) {
          if (item.uniqueId === uniqueSiteId) {
            newset.delete(item)
          }
        }
        setData(newset)
        alert("Permission revoked")
      } else {
        alert("Please try Again")
      }
    })
    .catch(console.log)
  }

  const fetchData = async () => {
    try {
      const data = await fetch(PROFILE_API)
      const json = await data.json()
      return json
    } catch(e) {
      console.error(e)
    }
  }

  useEffect(() => {
    if (!loadedState) {
      fetchData().then(items => {
        const newset = new Set()
        items.forEach(item => {
          if (item.approved) {
            newset.add(item)
          }
        })
        setData(newset)
        setLoadedState(true)
      })
    }
  }, [data, loadedState]);



  const AccountList = (
    <List
      style={{margin: pageMargin}}
      itemLayout="vertical"
      dataSource={data}
      renderItem={item => {
        return (
          <Collapse
              style={{background: 'none'}}
              bordered={false}
              defaultActiveKey={[]}
              expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
            >
              <Panel header={(
                <section style={{
                  display: 'flex',
                  flexFlow: 'row wrap',
                  justifyContent: 'space-between'
                }}>
                  <h3 style={{
                    margin: 'auto 0'
                  }}>
                    {
                      `${item.uniqueId} - ${item.siteRequest.siteUrl}`
                    }
                  </h3>

                  <Button onClick={e => {
                    e.stopPropagation();
                    revokePermissions(item.uniqueId)
                  }} type="primary">Revoke Permissions</Button>
                </section>
              )} style={customPanelStyle}>
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href={item.siteRequest.siteUrl}>{item.siteRequest.siteUrl}</a>}
                    description={`Uses lol`}
                  />
                  {
                    loadedState ? <h3
                    style={{
                      marginLeft: pageMargin * 2,
                      marginRight: pageMargin * 2,
                      marginTop: pageMargin,
                      marginBottom: pageMargin
                    }}
                  >
                    Details
                  </h3> : <Skeleton/>
                  }

                  <Collapse
                    style={{background: 'none', margin: pageMargin}}
                    bordered={false}
                    defaultActiveKey={[]}
                    expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                  >
                    {
                      item.siteRequest.userDetail.map((detail, id) => (
                        <Panel header={detail.detailName} key={id} style={{...customPanelStyle, background: '#f6f8ff'}}>
                          <p>{detail.reason}</p>
                        </Panel>

                      ))
                    }
                  </Collapse>
                </List.Item>
              </Panel>
          </Collapse>
        )
      }}
    />
  )


  return (
    <section className="container">
      <PageHeader style={{margin: pageMargin, padding: 0}}>
        <h1 style={{margin: 0}}>
          Your data profile
        </h1>
      </PageHeader>
      {AccountList}
    </section>
  );
}

export default ApprovalPage;
