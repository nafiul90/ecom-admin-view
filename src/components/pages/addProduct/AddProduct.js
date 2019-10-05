import React from "react";
import Form from "../../common/form/Form";
import { productFormData } from "./productFormData";
import PageWrapper from '../../common/PageWrapper';
import { PageHeader, Button } from 'antd';

export default () => {
    const pageHeader = <PageHeader title="Add Products" subTitle="Add your product carefully." />
    return (
        <PageWrapper pageHeader={pageHeader}>
            <Form formData={productFormData} submitMsg="ADD PRODUCT" />
        </PageWrapper>
    )
}