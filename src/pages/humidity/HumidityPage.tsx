import { Button, Col, Divider, Row } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListHumidity from './ListHumidity';

export default () => {
    const navigate = useNavigate();
    const onCreateClick = ()=>{
        navigate('/humidity/create');
    }
    return (
        <>
            <Divider orientation="center">Humidity</Divider>
            <Row>
                <Col push={22} span={4}>
                <Button  key='create' type='primary' onClick={onCreateClick}>
                    Create
                </Button>
                </Col>

                <Col span={24} >
                    <ListHumidity />
                </Col>
            </Row>
        </>
    );
};