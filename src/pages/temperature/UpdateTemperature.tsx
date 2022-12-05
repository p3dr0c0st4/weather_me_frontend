import React  from 'react';
import { Button, Form, Input, Space } from 'antd';
import {useParams} from "react-router-dom";
import { updateHumidityItem } from '../../services/HumidityService';



export default () => {
    
    const { id } = useParams()


    const onFinish = (values: any) => {

        updateHumidityItem(values.id, values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
            
        return (
            <>
            
            <Space direction="vertical">
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    style={{ width: 250 }}
                    label='Id'
                    name="id"
                    rules={[{ required: true, message: 'Insert value' }]}
                    initialValue={id}
                >
                    <Input disabled={true} />
                </Form.Item>

                <Form.Item
                    style={{ width: 250 }}
                    label='Humidity'
                    name="humidity"
                    rules={[{ required: true, message: 'Insert value' }]}
                    initialValue='temperature'
                >
                    <Input />
                </Form.Item>
    
                <Form.Item
                    style={{ width: 250 }}
                    label='Date'
                    name="date"
                    rules={[{ required: true, message: 'Insert date' }]}
                    initialValue='date'
                >
                    <Input/>
                </Form.Item>
    
                <Form.Item
                    style={{ width: 250 }}
                    label='Location'
                    name="location"
                    rules={[{ required: true, message: 'Insert location' }]}
                    initialValue='location'
                >
                    <Input />
                </Form.Item>
                <Button htmlType="submit"  key='update' type='primary'>
                    Update
                </Button>
            </Form>
            </Space>
            </>
        );
};

