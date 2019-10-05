import React from "react";
import PageWrapper from '../../common/PageWrapper';
import { PageHeader, Row, Col, Divider } from 'antd';
import ProductList from "./ProductList";

import "./Products.scss";

const Products = () => {

    const pageHeader = <PageHeader title="Products" subTitle="Your product list." />
    return (
        <PageWrapper pageHeader={pageHeader}>
            <ProductList />
        </PageWrapper>
    )
}

export default Products;