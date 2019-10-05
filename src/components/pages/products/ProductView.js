import React from "react";
import PageWrapper from '../../common/PageWrapper';
import { PageHeader, Button } from 'antd';
import ProductList from "./ProductList";
import { ADD_PRODUCT_PATH } from "../../../routes/Slugs";
import { Link } from 'react-router-dom';


import "./Products.scss";

const Products = () => {

    const pageHeader = <PageHeader title="Products" subTitle="Your product list." />
    return (
        <PageWrapper pageHeader={pageHeader}>
            <Link to={ADD_PRODUCT_PATH}>
                <Button shape="circle" type="primary" icon="plus"></Button> ADD MORE PRODUCT<br /><br />
            </Link>

            <ProductList />
        </PageWrapper>
    )
}

export default Products;