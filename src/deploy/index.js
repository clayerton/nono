import React from 'react';
import { Button, Form, Input, Upload, Row, Col, InputNumber, message } from 'antd';
import './index.less';
import Images from '@/constant'
import { PlusOutlined } from '@ant-design/icons';


const { TextArea } = Input

export default function Explore(props) {

  const onFinish = (values) => {
    console.log('values', values);
  }

  return (
    <div className={'main'}>
      <div className='title1'>Fair Meme Deploy<div>V2</div></div>
      <div>The FAME protocol only charges a service fee when the deployed Meme Coin reaches its threshold of raising.
        The service fee is 0.8% of the raised SOL, with a minimum charge of 3.8 SOL if less,
        to cover the costs of establishing liquidity pools. (provisionally on a trial basis)</div>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', }}>
        <Form onFinish={onFinish}>
          <Row gutter={24}>
            <Item label="Token name" name={'tokenName'}>
              <Input placeholder='Like "FAME' />
            </Item>

            <Item label="Token Logo"  name={'tokenLogo'} valuePropName="fileList">
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </div>
              </Upload>
            </Item>

            <Item label="Description"  name={'description'}>
              <TextArea rows={4} />
            </Item>

            <div>===============================================================</div>

            <Item label={'Blockchain'} name={'blockChain'}>
              <span>Solana</span>
            </Item>

            <Item label={'Supply'}  name={'supply'} extra="LP: 50%, Airdrop: 50%">
              <span>1,000,000,000</span>
            </Item>

            <Item label={'Goal of Raising'} name={'goalOfRaising'} extra={<div>
              <p>The portion raised exceeds this goal will be refunded on a pro-rata basis.</p>
              <p>If the total SOL raised are less than this goal, it will be considered a fundraising failure,
                and all SOL will be fully refunded to the wallet addresses of the participants who contributed.</p>
            </div>} rules={[{ required: true, message: 'must not be empty' }]}>
              <InputNumber style={{ width: '100%' }} controls={false} addonAfter={'SOL'} />
            </Item>

            <Item label={'HardCap'} name={'hardCap'} extra={<div>- Once the fundraising amount reaches the HardCap,
              users are no longer able to participate in the fundraising.</div>} rules={[{ required: true, message: 'must not be empty' }]}>
              <InputNumber style={{ width: '100%' }} addonAfter={'SOL'} />
            </Item>

            <Item 
            label={'Max Amount Per User'} 
            name={'maxAmount'} 
            extra={<div>- The maximum amount each wallet address can participate in the fundraising.</div>} 
            rules={[{ required: true, message: 'must not be empty' }]}>
              <InputNumber style={{ width: '100%' }} addonAfter={'SOL/User'} />
            </Item>

            <Item label={'Raising Duration'} name={'raisingDuration'} 
            extra={<div>- The maximum amount each wallet address can participate in the fundraising.</div>} 
            rules={[{ required: true, message: 'must not be empty' }]}>
              <InputNumber style={{ width: '100%' }} addonAfter={'Hours'} />
            </Item>

            <div>===============================================================</div>

            <Item label={'Twitter Link'}  name={'twitterLink'}/>
            <Item label={'Telegram Link'}  name={'telegramLink'}/>
            <Item label={'Website'}  name={'website'}/>

            <div style={{ width: '100%',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Button type='primary' htmlType='submit'>Deploy</Button>
              <p>Cost to deploy: ~0.02 SOL</p>
            </div>

          </Row>
        </Form>

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

const Item = (props) => {
  const { label, name, children, rules, ...rest } = props;
  return (
    <Col lg={24} md={24} sm={24}>
      <Form.Item {...rest} label={label} name={name} rules={rules} labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
        {children || (
          <Input autoComplete="off" allowClear placeholder={'(Optional)'} />
        )}
      </Form.Item>
    </Col>
  );
};
