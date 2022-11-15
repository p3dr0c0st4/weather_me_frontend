import { Form, Input } from 'antd';
import React from 'react';

const CreateForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

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
        style={{width: 250}}
        label="Value"
        name="value"
        rules={[{ required: true, message: 'Insert value' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
         style={{width: 250}}
        label="Date"
        name="date"
        rules={[{ required: true, message: 'Insert date' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        style={{width: 250}}
        label="Location"
        name="location"
        rules={[{ required: true, message: 'Insert location' }]}
      >
        <Input />
      </Form.Item>

      {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> */}
    </Form>
  );
};

export default CreateForm;