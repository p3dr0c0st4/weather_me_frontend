import React from 'react';
import '../../App';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {sensorDto} from '../../services/dtos/sensorDto';


  const columns: ColumnsType<sensorDto> = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      render: text => <a>{text}</a>,
    },
    {
      title: 'value',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'location',
      key: 'location',
      dataIndex: 'location',
    },
    {
      title: 'action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <a>Update </a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  const data: sensorDto[] = [
    {
      key: '1',
      id: '111-111-111',
      value: 10,
      date: 101010,
      location: "Maia",
    },
    {
        key: '2',
        id: '222-222-222',
        value: 20,
        date: 111111,
        location: "Ovar",
      },
      {
        key: '3',
        id: '333-333-333',
        value: 30,
        date: 121212,
        location: "Estarreja",
      },
  ];
  
    const ContainerList: React.FC = () => <Table columns={columns} dataSource={data} />;

  export default ContainerList;