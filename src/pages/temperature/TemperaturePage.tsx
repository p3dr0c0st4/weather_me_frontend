import { AreaChartOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Space } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GraphTemperature from './GraphTemperature';
import ListTemperature from './ListTemperature';

export default () => {
    const navigate = useNavigate();
    const onCreateClick = ()=>{
        navigate('/temperature/create');
    }
     
    const [listPage, setListPage] = useState(true);


    return (
        <> 
            <Divider orientation="center">Temperature</Divider>
            <Row>
                <Col span={8}></Col>
                <Col span={8} style={{ textAlign: 'center'}}>
                    <Space size={'large'}>
                        <Button key={'list'} onClick={() => {setListPage(true)}}>
                            <UnorderedListOutlined  style={{ fontSize:'1.4em'}} />
                        </Button>
                        <Button key={'graph'} onClick={() => {setListPage(false)}}>
                            <AreaChartOutlined style={{ fontSize:'1.4em'}} />
                        </Button>
                    
                    </Space>
                </Col>
                <Col span={8} push={6}>
                <Button  key='create' type='primary' onClick={onCreateClick}>
                    Create
                </Button>
                </Col>
            
            </Row>
            <Divider></Divider>
            <Row>

                <Col span={24}>
                    {listPage
                        ? <ListTemperature />
                        : <GraphTemperature/>
                    }
                    
                </Col>
            </Row>
        </>
    );
};