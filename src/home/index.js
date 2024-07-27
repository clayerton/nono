import React from 'react';
import { Button, Skeleton, Space, List, Table } from 'antd';
import './index.less';
import Images from '@/constant'

const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
  ];

  const listData = [
    {
      title: '1. What is $FAME?',
      description: '$FAME is the inaugural token launched based on the FAME Protocol.',
    },
    {
        title: '2.  What is FAME Protocol?',
        description: <div>
          The FAME Protocol is a fair launch protocol built on Solana, designed to offer a transparent and equitable platform 
          that enables all users to participate in and benefit from the growth and appreciation of meme coins. 
          All projects deployed through this protocol are guaranteed against rug pulls, 
          providing users with a fast and cost-effective environment for the creation, trade, and circulation of meme coins.
        </div>,
      },
      {
        title: '3. Goals and Vision?',
        description: <div>
          The FAME Protocol aims to create a vibrant and healthy meme coin ecosystem. By fostering community involvement and transparent governance, 
          the project seeks to establish a sustainable platform where everyone can find their niche in this exciting emerging market. In the next phase, 
          the FAME Protocol will introduce Deploy and Marketing functionalities, 
          allowing anyone to launch tokens through the protocol.
        </div>,
      },
      {
        title: '4. How does the FAME Protocol ensure fairness, equity, and transparency?',
        description: <div>
          <p>- It's an open source contract.</p>
          <p>- Everyone can initiate refunds or open LP.</p>
          <p>- The completion of LP formation, discarding of permissions, refunds, and token distribution will be entirely controlled by the contract, 
            ensuring a transparent and fair process for all participants.</p>
        </div>,
      },
  ];
export default function Home(props) {

    
    const columns = [
        {
          title: 'Token',
          dataIndex: 'name',
          key: 'name',
          render: (text) => {
                return <div style={{width: '100%', height: 100, display: 'flex', flexDirection: 'row'}}>
                    <div>
                        <img src={Images.logo} alt='' style={{ width: 60, height: 60 }} />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div>pizza</div>
                    <div>pizza2</div>
                    </div>
                </div>
            },
        },
        {
          title: 'Progress',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Status',
          dataIndex: 'address',
          key: 'address',
        },
        {
            title: 'Created',
            dataIndex: 'address',
            key: 'address',
          },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <div style={{ display: 'flex', flexDirection: 'column'}}>
              <Button type='primary' onClick={() => {}} style={{marginBottom: 10}}>Swep</Button>

              <Button type='primary' onClick={() => {}}>Detail</Button>
            </div>
          ),
        },
      ];
    return (
        <div className={'main'}>
            <div className='title1'>FAME Protocol</div>
            <div>A Fair Launch Protocol for meme coins, base on Solana.</div>
            <div>
                <Button type='primary' onClick={() => { }}>Deploy a new coin</Button>
                <Button onClick={() => { }}>Deploy a new coin</Button>
            </div>
            <div>Pool Created</div>
            <div style={{ width: '100%' }}>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    footer={(currentPageData => {
                        return <a onClick={() => { }}
                            style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            View more
                        </a>
                    })}

                />
            </div>

                    <div>Q&A =================================================================================================================</div>
            <div style={{ width: '100%' }}>
                <List
                    itemLayout="horizontal"
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<a href="https://ant.design">{item.title}</a>}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <img src={Images.logo} alt='' style={{ width: 60, height: 60, }} />
                <img src={Images.logo} alt='' style={{ width: 60, height: 60 }} />
            </div>
            <footer>
                <img src={Images.logo} alt='' style={{ width: 60, height: 60 }} />
            </footer>
            <footer>© 2024 by FAME. All rights reserved!</footer>
        </div>
    )
} 
