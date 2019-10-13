import React from "react";
import PageWrapper from '../../common/PageWrapper';
import { PageHeader, Button } from 'antd';
import ProductList from "./ProductList";
import { ADD_PRODUCT_PATH } from "../../../routes/Slugs";
import { Link } from 'react-router-dom';


const Products = () => {

    const pageHeader = <PageHeader title="Products" subTitle="Your product list." extra={[
        <Link to={ADD_PRODUCT_PATH}>
            <Button type="primary" icon="plus">ADD MORE PRODUCT</Button>
        </Link>
    ]}
    />
    return (
        <PageWrapper pageHeader={pageHeader}>
            <ProductList />
        </PageWrapper>
    )
}

export default Products;