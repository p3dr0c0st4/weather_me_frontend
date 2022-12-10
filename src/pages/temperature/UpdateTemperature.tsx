import React, { useEffect, useState }  from 'react';
import { Button, Form, Input, Space } from 'antd';
import {useParams} from "react-router-dom";
import { getTemperatureItem, updateTemperatureItem } from '../../services/TemperatureService';
import { TemperatureDto } from '../../services/dtos/TemperatureDto';




export default () => {
    const [form] = Form.useForm()
    const { id } = useParams()

    const [item,setItem] = useState<TemperatureDto>({
        id: 'tempID',
        temperature: 99,
        date: 99,
        location: 'tempLocation'
    })

    form.setFieldsValue({
        temperature: item.temperature,
        date: item.date,
        location: item.location
    })

    const fetchAll = async () => {
        const result = await getTemperatureItem(id??'');

        if(!result){
            //TODO: Redirect homepage
            return window.location.replace(`${process.env.REACT_APP_HOMEPAGE}`)    
        }
        setItem(result)
        
    }
    useEffect(()=> {
        fetchAll().catch((err)=>{console.log(err)});
    },[])


    const onFinish = (values: any) => {

        updateTemperatureItem(values.id, values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
            
        return (
            <>
            
            <Space direction="vertical">
            <Form
                form={form}
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
                    label='Temperature'
                    name="temperature"
                    rules={[{ required: true, message: 'Insert value' }]}
                    initialValue={item?.temperature}
                >
                    <Input />
                </Form.Item>
    
                <Form.Item
                    style={{ width: 250 }}
                    label='Date'
                    name="date"
                    rules={[{ required: true, message: 'Insert date' }]}
                    initialValue={item?.date}
                >
                    <Input/>
                </Form.Item>
    
                <Form.Item
                    style={{ width: 250 }}
                    label='Location'
                    name="location"
                    rules={[{ required: true, message: 'Insert location' }]}
                    initialValue={item?.location}
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

