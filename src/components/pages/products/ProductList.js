import React, { useState, useEffect, useContext, Fragment } from "react";
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import { ProductContext } from "../../../contexts/ProductContextProvider";
import "./Products.scss";
import image from "./images.jpeg";
const Products = () => {

    const { columns } = useColumnWithSearch();
    const productContext = useContext(ProductContext);

    useEffect(() => {
        productContext.getAllProducts();
    }, [null])

    return (
        <Table
            className="product_table"
            columns={columns}
            rowSelection={rowSelection}
            dataSource={productContext.products.map((e, i) => ({ ...e, key: i }))}
            expandedRowRender={record => <ExpandView data={record} />}
        />
    )
}

const ExpandView = ({ data }) => {
    const { variantColumns, shippingColumns, packagePricingColumns } = useColumnWithSearch();
    return (
        <Fragment>
            <div className="internal_box">
                <h4 className="internal_box_header">Variants</h4>
                <Table className="internal_table" columns={variantColumns} dataSource={data.variantList.map((e, i) => ({ ...e, key: i }))} />
            </div>
            <div className="internal_box">
                <h4 className="internal_box_header">Shipping</h4>
                <Table className="internal_table" columns={shippingColumns} dataSource={[{ ...data.shipping, key: "shipping" }]} />
            </div>
            <div className="internal_box">
                <h4 className="internal_box_header">Package Pricing</h4>
                <Table className="internal_table" columns={packagePricingColumns} dataSource={data.packagePricingList.map((e, i) => ({ ...e, key: i }))} />
            </div>
            <div className="internal_box">
                <h4 className="internal_box_header">Tags</h4>
                <div className="internal_table">
                    {
                        data.tagList.map((e, i) => <span key={i} className="tag_box">{e.value}<Button className="button" type="link"><Icon type="close" /></Button></span>)
                    }
                    <div className="add_tag_box">
                        <Input placeholder="add more tags" allowClear />
                        <Button>Add tag</Button>
                    </div>
                </div>
            </div>

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
            render: () => <img src={image} style={{ height: "60px", width: "60px", borderRadius: "5px" }} alt="no content" />
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
            render: () => <a href="#">Delete</a>,
        },
    ];
    const shippingColumns = [
        {
            title: "Height",
            dataIndex: "height",
            key: "height",
            ...getColumnSearchProps('height'),
        },
        {
            title: "Width",
            dataIndex: "width",
            key: "width",
            ...getColumnSearchProps('width'),
        },
        {
            title: "Length",
            dataIndex: "length",
            key: "length",
            ...getColumnSearchProps('length'),
        },
        {
            title: "Weight",
            dataIndex: "weight",
            key: "weight",
            ...getColumnSearchProps('weight'),
        },
        {
            title: "Company Name",
            dataIndex: "companyName",
            key: "companyName",
            ...getColumnSearchProps('companyName'),
        }
    ]

    const variantColumns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            ...getColumnSearchProps('id'),

        },
        {
            title: 'Color',
            dataIndex: 'color',
            key: 'color',
            ...getColumnSearchProps('color'),
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            ...getColumnSearchProps('quantity'),
        },
        {
            title: 'Size',
            dataIndex: 'size',
            key: 'size',
            ...getColumnSearchProps('size'),
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => <a href="#">Delete</a>,
        },
    ];

    const packagePricingColumns = [
        {
            title: "Minimum Quantity",
            dataIndex: "minimumQuantity",
            key: "minimumQuantity",
        },
        {
            title: "Price Per Product",
            dataIndex: "pricePerProduct",
            key: "pricePerProduct",
        },

    ]

    return { columns, variantColumns, shippingColumns, packagePricingColumns };
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