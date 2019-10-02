import React from 'react';
import { Table } from 'antd';

const UserList = () => {


    const userColumns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            // render: text => <a href="javascript:;">{text}</a>,
        },
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        }
    ]

    return (
        <Table columns={userColumns} dataSource={[]} rowKey="id" />
    );
}

export default UserList;