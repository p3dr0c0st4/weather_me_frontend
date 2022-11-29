import React, { useState } from 'react';
import { Space, Table, Modal, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { TemperatureDto } from '../../services/dtos/TemperatureDto';
import axios from 'axios';


export default () =>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemId, setItemId] = useState('');
    const [item, setItem] = useState({});

  const handleOk = () => {
    //TODO: call api to Delete id
    axios.delete(`/${itemId}`)
        .then(res => {
                setItem(res.data)
                console.log('Deleted: '+ item)
                console.log(res.status)

              })
             .catch(err => {
                console.log('errorLog: ' + err)
            });

    console.log('DELETE',itemId)
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showDeleteModal = (id:string)=>{
    console.log(id)
    setItemId(id)
    setIsModalOpen(true);
  }


  const columns: ColumnsType<TemperatureDto> = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <a>{text}</a>
    },
    {
        title: 'value',
        dataIndex: 'value',
        key: 'value'
    },
    {
        title: 'date',
        dataIndex: 'date',
        key: 'date'
    },
    {
        title: 'location',
        key: 'location',
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

const data: TemperatureDto[] = [
    {
        key: '1',
        id: '111-111-111',
        temperature: 10,
        date: 101010,
        location: 'Maia'
    },
    {
        key: '2',
        id: '222-222-222',
        temperature: 20,
        date: 111111,
        location: 'Ovar'
    },
    {
        key: '3',
        id: '333-333-333',
        temperature: 30,
        date: 121212,
        location: 'Estarreja'
    }
];
  
  return <><Table columns={columns} dataSource={data} />
  <Modal title='Delete Item?' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Delete item {itemId}?</p>
    </Modal></>;
} 
