import { Button, Form, Input } from 'antd';
import React from 'react';
import { create } from '../services/TemperatureService'

export default () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const onCreateTemp = ()=>(
        create()
    )

    return (
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
                name="value"
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
            <Button  key='save' type='primary' onClick={onCreateTemp}>
                Save
            </Button>
        </Form>
    );
};
