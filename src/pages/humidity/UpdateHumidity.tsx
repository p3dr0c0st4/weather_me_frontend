import React, { useEffect, useState }  from 'react';
import { Button, Form, Input, Space } from 'antd';
import {useParams} from "react-router-dom";
import { getHumidityItem, updateHumidityItem } from '../../services/HumidityService';
import { HumidityDto } from '../../services/dtos/HumidityDto';



export default () => {
    const [form] = Form.useForm()
    const { id } = useParams()

    const [item,setItem] = useState<HumidityDto>({
        id: 'humID',
        humidity: 99,
        date: 99,
        location: 'humLocation'
    })
    form.setFieldsValue({
        humidity: item.humidity,
        date: item.date,
        location: item.location
    })

    const fetchAll = async () => {
        const result = await getHumidityItem(id??'');

        if(!result){
            //TODO: Redirect homepage
            return window.location.replace(`${process.env.REACT_APP_HOMEPAGE}`)    
        }
        setItem(result)
        
    }
    useEffect(()=> {
        fetchAll().catch((err)=>{console.log(err)});
    },[]);

    const onFinish = (values: any) => {
        updateHumidityItem(values.id, values);
        return window.location.replace(`${process.env.REACT_APP_HOMEPAGE}/humidity`)
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
                form={form}
            >
                <Form.Item
                    style={{ width: 250 }}
                    label='Id'
                    name="id"
                    key={'id'}
                    rules={[{ required: true, message: 'Insert value' }]}
                    initialValue={id}
                >
                    <Input disabled={true} />
                </Form.Item>

                <Form.Item
                    style={{ width: 250 }}
                    label='Humidity'
                    name="humidity"
                    key={'humidity'}
                    rules={[{ required: true, message: 'Insert value' }]}
                    initialValue={item?.humidity}
                >
                    <Input />
                </Form.Item>
    
                <Form.Item
                    style={{ width: 250 }}
                    label='Date'
                    name="date"
                    key={'date'}
                    rules={[{ required: true, message: 'Insert date' }]}
                    initialValue={item?.date}
                >
                    <Input/>
                </Form.Item>
    
                <Form.Item
                    style={{ width: 250 }}
                    label='Location'
                    name="location"
                    key={'location'}
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

