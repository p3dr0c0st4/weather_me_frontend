import { Col, Divider, Row, Space } from 'antd';
import React from 'react';
import ContainerList from '../components/common/ContainerList';
import CreateButton from '../components/common/crudButtons/Create';


export default () => {

    return (
        <>
            <Divider orientation="left">Temperature or Humidity</Divider>
            <Row  >
                <Col push={22} span={4}>
                    <CreateButton key={'create'} />
                </Col>
            
                <Col span={24}>
                    <ContainerList />
                </Col>
            </Row>
        </>








    )

}

