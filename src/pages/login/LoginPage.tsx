import { Col, Divider, Row, Space } from 'antd';
import React from 'react';
import LoginForm from '../../components/LoginForm';

export default () => {

  return (
    <>

      <Divider orientation='center'>Login</Divider>

      <Row align={'middle'} >
        <Col span={8}></Col>
        <Col span={8} >
          <LoginForm />
        </Col>
        <Col span={8}></Col>
      </Row>
    </>
  );
};