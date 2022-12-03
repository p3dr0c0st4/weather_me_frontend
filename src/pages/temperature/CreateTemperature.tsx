import React from 'react';
import { Button, Form, Input, Space } from 'antd';
import { createItem } from '../../services/TemperatureService';

export default () => {


    const onFinish = (values: any) => {
        console.log('Success:', values);
        createItem(values)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
            
        return (
            <Space direction="vertical">
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    style={{ width: 250 }}
                    label="Value"
                    name="temperature"
                    rules={[{ required: true, message: 'Insert value' }]}
                >
                    <Input />
                </Form.Item>
    
                <Form.Item
                    style={{ width: 250 }}
                    label="Date"
                    name="date"
                    rules={[{ required: true, message: 'Insert date' }]}
                >
                    <Input />
                </Form.Item>
    
                <Form.Item
                    style={{ width: 250 }}
                    label="Location"
                    name="location"
                    rules={[{ required: true, message: 'Insert location' }]}
                >
                    <Input />
                </Form.Item>
                <Button htmlType="submit"  key='save' type='primary'>
                    Save
                </Button>
            </Form>
            </Space>
        );
};
