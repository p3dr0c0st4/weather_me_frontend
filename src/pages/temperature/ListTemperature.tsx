import React, { useState, useEffect } from 'react';
import { Space, Table, Modal, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { TemperatureDto } from '../../services/dtos/TemperatureDto';
import {deleteTemperatureItem, listAllTemperature} from '../../services/TemperatureService';


export default () =>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemId, setItemId] = useState('');
    const [items,setItems] = useState<TemperatureDto[]>([])

    const fetchAll = async()=>{
        
        const all = await listAllTemperature()
        setItems(all)
    }

    useEffect(()=>{
        fetchAll().catch((err)=>{console.log(err)});
    },[itemId])

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showDeleteModal = (id:string)=>{
    console.log(id)
    setItemId(id)
    setIsModalOpen(true);
  }

  const onDelete = async() => {
    const result = await deleteTemperatureItem(itemId);
    setIsModalOpen(false);
    if(!result){
        console.log('erro delete')
        return;
    }
    await fetchAll()
  }

  const itemWithKey = items.map( item =>  ({...item, key: item.id}) )

  const columns: ColumnsType<TemperatureDto> = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'idTemperature',
        render: (text) => <a>{text}</a>
    },
    {
        title: 'temperature',
        dataIndex: 'temperature',
        key: 'temperature'
    },
    {
        title: 'date',
        dataIndex: 'date',
        key: 'dateTemperature'
    },
    {
        title: 'location',
        key: 'locationTemperature',
        dataIndex: 'location'
    },
    {
        title: 'action',
        key: 'action',
        render: (_, item) => (
            <Space size="middle">
                <Link to={`/temperature/update/${item.id}`}>Update</Link>
                <Button type='link' onClick={()=>showDeleteModal(item.id)}>
                    Delete
                </Button>
            </Space>
        )
    }
];

    
  return <><Table columns={columns} dataSource={itemWithKey} />
  <Modal title='Delete Item?' open={isModalOpen} onOk={onDelete} onCancel={handleCancel}>
        <p>Delete item {itemId}?</p>
    </Modal></>;
} 
