import React, { useState, useEffect } from 'react';
import { Space, Table, Modal, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import {deleteHumidtyItem, listAllHumidity} from '../../services/HumidityService';
import { HumidityDto } from '../../services/dtos/HumidityDto';


export default () =>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemId, setItemId] = useState('');
    const [items,setItems] = useState<HumidityDto[]>([])

    const fetchAll = async()=>{
        const all = await listAllHumidity()
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
    const result = await deleteHumidtyItem(itemId);
    setIsModalOpen(false);
    if(!result){
        console.log('error delete')
        return;
    }
    await fetchAll()
  }

  const columns: ColumnsType<HumidityDto> = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'idHumidity',
        render: (text) => <a>{text}</a>
    },
    {
        title: 'Humidity',
        dataIndex: 'humidity',
        key: 'humidity'
    },
    {
        title: 'date',
        dataIndex: 'date',
        key: 'dateHumidity'
    },
    {
        title: 'location',
        key: 'locationHumidity',
        dataIndex: 'location'
    },
    {
        title: 'action',
        key: 'action',
        render: (_, item) => (
            <Space size="middle">
                <Link to={`/humidity/update/${item.id}`}>Update</Link>
                <Button type='link' onClick={()=>showDeleteModal(item.id)}>
                    Delete
                </Button>
            </Space>
        )
    }
];

    
  return <><Table columns={columns} dataSource={items} />
  <Modal title='Delete Item?' open={isModalOpen} onOk={onDelete} onCancel={handleCancel}>
        <p>Delete item {itemId}?</p>
    </Modal></>;
} 
