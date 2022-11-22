import React from 'react';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { HumidityDto } from '../../services/dtos/HumidityDto';

const columns: ColumnsType<HumidityDto> = [
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
                <Link to={`/humidity/update/${item.id}`}>Update</Link>
                <Link to={`/humidity/Delete/${item.id}`}>Delete</Link>
            </Space>
        )
    }
];

const data: HumidityDto[] = [
    {
        key: '1',
        id: '111-111-111',
        value: 10,
        date: 101010,
        location: 'Maia'
    },
    {
        key: '2',
        id: '222-222-222',
        value: 20,
        date: 111111,
        location: 'Ovar'
    },
    {
        key: '3',
        id: '333-333-333',
        value: 30,
        date: 121212,
        location: 'Estarreja'
    }
];

export default () => <Table columns={columns} dataSource={data} />;
