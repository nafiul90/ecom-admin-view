import React, { Fragment, useContext, useState, useEffect } from "react";
import PageWrapper from '../../common/PageWrapper';
import { PageHeader, Button, Input, Table, Icon } from 'antd';
import { PRODUCT_PATH, PRODUCT_INFO_PATH, EDIT_PATH } from "../../../routes/Slugs";
import { Link, Redirect } from 'react-router-dom';
import { productFormData } from "../../pages/addProduct/productFormData";
import { ProductContext } from "../../../contexts/ProductContextProvider";
import confirmationModal from "../../common/ConfirmationModal";
import LoadingSuspense from "../../common/LoadingSuspense";

const routes = [
    {
        path: PRODUCT_INFO_PATH,
        breadcrumbName: 'Product Information',
    }
]

export default (props) => {

    const [updated, setUpdated] = useState(false);
    const productContext = useContext(ProductContext);
    const product = productContext.product;

    const data = props.location.data;
    useEffect(() => {
        setUpdated(false);
        data && productContext.storeProduct(data);
    }, []);

    const onSubmitHandle = (updatedData, root, elementName, index) => {
        if (!root) return;

        //check if updated data is in an array.
        if (elementName.includes(" ")) {
            elementName = elementName.split(" ")[0];
            data[elementName] = data[elementName].map((e, i) => {
                if (i === index) {
                    updatedData.id = e.id;
                    e = updatedData;
                }
                return e
            });
        } else {
            data[elementName] = { ...updatedData, id: data[elementName].id };
        }
        console.log(elementName, updatedData);
        setUpdated(true);

        productContext.updateProduct(data, data.id) ? confirmationModal("updated successfully !", "success")
            : confirmationModal("Can not update !", "error")



        console.log("submit button clicked passed", data);
    }

    const variantColumns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',

        },
        {
            title: 'Color',
            dataIndex: 'color',
            key: 'color',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Size',
            dataIndex: 'size',
            key: 'size',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (e, x, i) => (
                <Fragment>
                    <Link
                        to={
                            {
                                pathname: EDIT_PATH,
                                data: e,
                                formData: productFormData.variantList.config.nested,
                                header: "Edit Variant Information",
                                updated: updated,
                                onSubmit: (data, root) => onSubmitHandle(data, root, "variantList nested", i)
                            }}
                    >

                        <Icon type="edit" />
                    </Link>&nbsp;&nbsp;
                    <a href="#"><Icon type="delete" /></a>
                </Fragment>)
        },
    ];

    const shippingColumns = [
        {
            title: "Height",
            dataIndex: "height",
            key: "height",
        },
        {
            title: "Width",
            dataIndex: "width",
            key: "width"
        },
        {
            title: "Length",
            dataIndex: "length",
            key: "length"
        },
        {
            title: "Weight",
            dataIndex: "weight",
            key: "weight"
        },
        {
            title: "Company Name",
            dataIndex: "companyName",
            key: "companyName",
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (e, x, i) => (
                <Fragment>
                    <Link
                        to={
                            {
                                pathname: EDIT_PATH, data: e,
                                formData: productFormData.shipping.config.value,
                                updated: updated,
                                header: "Edit Shipping Information",
                                onSubmit: (data, root) => onSubmitHandle(data, root, "shipping", i),
                            }}
                    >
                        <Icon type="edit" />
                    </Link>
                </Fragment>)
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
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (e, x, i) => (
                <Fragment>
                    <Link
                        to={
                            {
                                pathname: EDIT_PATH,
                                data: e,
                                formData: productFormData.packagePricingList.config.nested,
                                header: "Edit Variant Information",
                                updated: updated,
                                onSubmit: (data, root) => onSubmitHandle(data, root, "packagePricingList nested", i),
                            }}
                    >

                        <Icon type="edit" />
                    </Link>&nbsp;&nbsp;
                    <a href="#"><Icon type="delete" /></a>
                </Fragment>)
        }
    ];

    const pageHeader = <PageHeader title={"Product Detail Information"} subTitle="Product details."
        breadcrumb={{ routes }}
    />

    return (
        data || productContext.product ?
            <PageWrapper pageHeader={pageHeader}>
                {
                    product ?
                        <Fragment>
                            {/* Render variants table. */}
                            <div className="internal_box">
                                <h2>Variants</h2>
                                <Table className="internal_table" columns={variantColumns} dataSource={product.variantList.map((e, i) => ({ ...e, key: i }))} pagination={false} />
                            </div>

                            {/* Render shipping information. */}
                            <div className="internal_box">
                                <h2>Shipping</h2>
                                <Table className="internal_table" columns={shippingColumns} dataSource={[{ ...product.shipping, key: "shipping" }]} pagination={false} />
                            </div>

                            {/* Render package pricing. */}
                            <div className="internal_box">
                                <h2>Package Pricing</h2>
                                <Table className="internal_table" columns={packagePricingColumns} dataSource={product.packagePricingList.map((e, i) => ({ ...e, key: i }))} pagination={false} />
                            </div>

                            {/* Render tags. */}
                            <div className="internal_box">
                                <h2>Tags</h2>
                                <div className="internal_table">
                                    {
                                        product.tagList.map((e, i) => <span key={i} className="tag_box">{e.value}<Button className="button" type="link"><Icon type="close" /></Button></span>)
                                    }
                                    <div className="add_tag_box">
                                        <Input placeholder="add more tags" allowClear />
                                        <Button>Add tag</Button>
                                    </div>
                                </div>
                            </div>

                        </Fragment> : <LoadingSuspense />
                }

            </PageWrapper> : <Redirect to={PRODUCT_PATH} />
    )
}



