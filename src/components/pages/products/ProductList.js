import React, { useState, useEffect, useContext, Fragment } from "react";
import LoadingSuspense from "../../common/LoadingSuspense";
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import { Link } from "react-router-dom";
import { PRODUCT_INFO_PATH } from "../../../routes/Slugs";
import { ProductContext } from "../../../contexts/ProductContextProvider";
import "./Products.scss";
const Products = () => {

    const { columns } = useColumnWithSearch();
    const productContext = useContext(ProductContext);

    useEffect(() => {
        productContext.getAllProducts();
    }, [])

    return (
        <Fragment>
            {productContext.errorMsg && <h2 style={{ color: "brown" }}>{productContext.errorMsg}</h2>}

            {
                productContext.products ?
                    <Table
                        className="product_table"
                        columns={columns}
                        rowSelection={rowSelection}
                        dataSource={productContext.products.map((e, i) => ({ ...e, key: i }))}
                    /> :
                    <LoadingSuspense />
            }
        </Fragment>
    )
}

const useColumnWithSearch = () => {
    const [searchText, setSearchText] = useState('');

    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
                </Button>
                <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
                </Button>
            </div>
        ),

        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),

        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),

        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => console.log("method called"));
            }
        },

        render: text => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    });

    const handleSearch = (selectedKeys, confirm) => {
        confirm();
        setSearchText(selectedKeys[0]);
    };

    const handleReset = clearFilters => {
        clearFilters();
        setSearchText('');
    };

    const columns = [
        {
            title: 'Image',
            dataIndex: 'thumbnailImage',
            key: 'thumbnailImage',
            width: '30%',
            render: (e) => <img src={e} style={{ height: "60px", width: "60px", borderRadius: "5px" }} alt="no content" />
        },
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            width: '30%',
            ...getColumnSearchProps('id'),
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '20%',
            ...getColumnSearchProps('name'),

        },
        {
            title: 'Sale Price',
            dataIndex: 'salePrice',
            key: 'salePrice',
            ...getColumnSearchProps('salePrice'),
        },
        {
            title: 'Purchase Price',
            dataIndex: 'purchasePrice',
            key: 'purchasePrice',
            ...getColumnSearchProps('purchasePrice'),
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (e) => (
                <Fragment>
                    <Link to={{ pathname: PRODUCT_INFO_PATH, data: e }}>
                        <Icon type="eye" /></Link>&nbsp;&nbsp;
                    <a href="#"><Icon type="delete" /></a>
                </Fragment>)
        },
    ];


    return { columns };
}

// rowSelection objects indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
    },
};


export default Products;